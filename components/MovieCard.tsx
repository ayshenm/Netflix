import { MovieInterface } from "@/types";
import React from "react";
import Image from "next/image";
import { PlayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface MovieCardProps {
  data: MovieInterface;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-52 transition-all">
      <img
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
          absolute top-0 ">
        <img
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
          <div className="flex cursor-pointer">
            <div
              className="bg-white flex justify-center cursor-pointer w-7 h-7 lg:w-11 lg:h-11
              p-2 rounded-full transition-all   hover:bg-zinc-500">
              <PlayIcon className="text-black w-4 lg:w-6  "></PlayIcon>
            </div>

            <div>
              {" "}
              <PlayIcon className="text-black w-4 lg:w-6"></PlayIcon>
            </div>

            <div
              className=" ml-auto flex justify-center cursor-pointer w-7 h-7 lg:w-11 lg:h-11 border
              p-2 rounded-full transition-all">
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
