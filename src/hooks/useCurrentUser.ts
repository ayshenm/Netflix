import fetcher from "@src/libs/fetcher"
import useSWR from "swr"

const useCurrentUser = () =>{
    const {data,error,isValidating} = useSWR('/api/current',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    } );
    return {
        data,
        error,
        isValidating, 
    }
};

export default useCurrentUser;

