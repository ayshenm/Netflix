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
    <div className="px-4">
      <div className="">
        <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl lg:mt-5 mb-5 mt-5">
          {title}
        </p>
        <div className="">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={2}
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
