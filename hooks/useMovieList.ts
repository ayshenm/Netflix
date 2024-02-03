import fetcher from "@/libs/fetcher"
import useSWR from "swr"


const useMovieList = () =>{
    const {data,error,isLoading} = useSWR('/api/movie',fetcher,{
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

export default useMovieList;