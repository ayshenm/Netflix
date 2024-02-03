import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useCurrentUser = () =>{
    const {data,error,isLoading} = useSWR('/api/current',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    } );
    return {
        data,
        error,
        isLoading, 
    }
};

export default useCurrentUser;