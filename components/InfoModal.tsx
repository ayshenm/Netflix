import useInfoModal from "@/hooks/useInfoModal";
import React, { useCallback, useEffect, useState } from "react";
import useMovie from "@/hooks/useMovie";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PlayButton from "./ButtonPlay";
import FovoriteButton from "./FovoriteButton";

interface infoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<infoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  const { movieId } = useInfoModal();

  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="realtive w-auto mx-auto max-w-3xl rounded-xl overflow-hidden">
        <div className={`${isVisible ? "scale-100" : "scale-0"}relative flex-auto bg-zinc-800`}>
          <div className="h-96 relative">
            <video
              className="w-full brightness-50 object-cover h-full"
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              src={data?.videoUrl}></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 bg-black rounded-full px-2 py-2">
              <XMarkIcon className="text-white w-6"></XMarkIcon>
            </div>
            <div className="absolute bottom-44 ml-5">
              <p className="text-xl text-white lft-6 md:text-2xl lg:text-4xl">{data?.title}</p>
              <div className="flex gap-4 items-center mt-5">
                <PlayButton movieId={data.id} key={data.id}></PlayButton>
                <FovoriteButton movieId={data.id} key={data.id}></FovoriteButton>
              </div>
            </div>
          </div>
          <div className="px-12 py-10">
            <p className="text-green-500 font-semibold text-lg flex items-center gap-2 mb-4">New</p>
            <p className="text-white text-lg font-semibold ">{data?.duration}</p>
            <p className="text-white text-lg font-semibold mb-2 ">{data?.genre}</p>
            <p className="text-white text-lg font-semibold ">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
