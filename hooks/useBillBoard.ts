import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const UseBillBoard = () =>{
    const {data,error,isLoading} = useSWR('/api/randommovie',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    });
    return {
        data,
        error,
        isLoading,
       
    }
};

export default UseBillBoard;