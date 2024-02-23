import serverAuth from "@src/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@src/libs/prismadb"
import useCurrentUser from "@src/hooks/useCurrentUser";


export default async function handler (req : NextApiRequest, res: NextApiResponse){

    try{
        if(req.method !== 'GET')
        {
            return res.status(405).end();
        }
       const {currentUser} = await serverAuth(req,res);

       const favoriteMovie = await prismadb.movie.findMany({
        where:{
            id:{
                in:currentUser?.favoriteIds,
            }
        }
       })

       return res.status(200).json(favoriteMovie);
       
    
    }
    catch(error){
        console.log(error);
        return res.status(500).end();
    }


}