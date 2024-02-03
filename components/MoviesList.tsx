import React from "react";
import { isEmpty } from "lodash";
import { MovieInterface } from "@/types";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface MovieListProps {
  data: MovieInterface[];
  title: string;
}

const MoviesList: React.FC<MovieListProps> = ({ data, title }) => {
  console.log("data", data);

  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 space-y-6 lg:mt-[170px] max-ms:mt-10 ">
      <div className="sm:pt-9">
        <p className="text-white  mb-5 mt-5font-semibold text-lg md:text-xl lg:text-2xl ">
          {title}
        </p>
        <div className="">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            spaceBetween={10}
            speed={500}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView:4 ,
                spaceBetween: 20,
              },
            }}
            className="h-80">
            {data.map((movie) => (
              <SwiperSlide className="" key={`${movie.id}-card`}>
                <MovieCard data={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
