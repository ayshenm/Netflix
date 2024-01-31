import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const UseBillBoard = () =>{
    const {data,error,isLoading} = useSWR('/api/movie',fetcher);
    return {
        data,
        error,
        isLoading,
       
    }
};

export default UseBillBoard;