import fetcher from "@/libs/fetcher"
import useSWR from "swr"


const useFavoriteMovie = () =>{
    const {data,error,isLoading} = useSWR('/api/fovoritelist',fetcher,{
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

export default useFavoriteMovie;