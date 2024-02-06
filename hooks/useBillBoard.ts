import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const UseBillBoard = () =>{
    const {data,error,isValidating} = useSWR('/api/randommovie',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    });
    return {
        data,
        error,
        isValidating,
       
    }
};

export default UseBillBoard;