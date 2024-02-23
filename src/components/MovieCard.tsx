import { MovieInterface } from "@src/types";
import React, { useCallback } from "react";
import Image from "next/image";
import { PlayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
// import FovoriteButton from "@/components/FovoriteButton";
import FovoriteButton from "./FovoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@src/hooks/useInfoModal";

interface MovieCardProps {
  data: MovieInterface;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {


  const router = useRouter();

  const {openModal} = useInfoModal();
  const redirectWatch = useCallback(()=> router.push(`/watch/${data.id}`),[router,data.id])
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-52 transition-all">
      <img onClick={redirectWatch}
        className="h-52 w-full 
        object-cover
         cursor-pointer
         shadow-xl rounded-lg
         group-hover:opacity-70 transition"  
        src={data.thumbnailUrl}
        alt="thumbnail"
      />

      <div
        className="invisible sm:visible z-20 opacity-0 
         group-hover:opacity-100 w-full
          absolute top-0 scale-0 group-hover:scale-105">
        <img onClick={redirectWatch}
          className="h-36 w-full 
        object-cover
         cursor-pointer
         shadow-xl rounded-lg
         transition"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div
          className="z-20 bg-zinc-900 p-2 lg:p-4 
        absolute w-full shadow-lg rounded-b-md ">
          <div className="flex cursor-pointer gap-3">
            <div
              className="bg-white flex justify-center cursor-pointer w-7 h-7 lg:w-11 lg:h-11
              p-2 rounded-full transition-all   hover:bg-zinc-500">
              <PlayIcon onClick={redirectWatch}  className="text-black w-4 lg:w-6"></PlayIcon>
            </div>

            <div>
              {" "}
              {/* <FavoriteMovieButton movieId = {data.id}> ggg</FavoriteMovieButton> */}
              <FovoriteButton movieId={data.id} />
            </div>

            <div onClick={()=>openModal(data?.id)}
             className="cursor-pointer gap-2 h-7 w-7 
             lg:w-11 lg:h-11 border-2 border-white rounded-full flex items-center justify-center
             hover:border-neutral-400 ml-auto">
              <ChevronDownIcon className="text-white w-5 lg:w-6"></ChevronDownIcon>
            </div>
          </div>
          <div className="text-white">
            <p className="text-green-500 text-sm  font-semibold mt-4">
              new
              <span className="text-white ml-2">2024</span>
            </p>
            <p>{data.duration}</p>
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
