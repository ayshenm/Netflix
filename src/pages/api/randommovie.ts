import serverAuth from "@src/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@src/libs/prismadb"


export default async function handler (req : NextApiRequest, res: NextApiResponse){

    try{
        if(req.method !== 'GET')
        {
            return res.status(405).end();
        }
        await serverAuth(req,res);
        const movieCount = await prismadb.movie.count();
        const randomInd = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take:1,
            skip:randomInd
        });

        return  res.status(200).json(randomMovies[0]);
    
    }
    catch(error){
        console.log(error);
        return res.status(500).end();
    }


}