import useCurrentUser from "@src/hooks/useCurrentUser";
import useFavoriteMovie from "@src/hooks/useFavoriteMovie";
import React, { useCallback, useMemo, useState } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";

interface favoriteButtonProps {
  movieId: string;
}
const FovoriteButton: React.FC<favoriteButtonProps> = ({ movieId }) => {
  const { data: MuteFavorite } = useFavoriteMovie();
  const { data: user } = useCurrentUser();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useMemo(() => {
    const list = user?.favoriteIds || [];
    setIsFavorite(list.includes(movieId));
  }, [user, movieId]);

  const toggleFavorites = useCallback(async () => {
    try {
      if (isFavorite) {
        await axios.delete("/api/favorite", { data: { movieId } });
      } else {
        await axios.post("/api/favorite", { movieId });
      }

      setIsFavorite(!isFavorite);
      MuteFavorite();
    } catch (error) {
      console.log("error", error);
    }
  }, [movieId, isFavorite, MuteFavorite]);

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer gap-2 h-7 w-7 
      lg:w-11 lg:h-11 border-2 border-white rounded-full flex items-center justify-center
      hover:border-neutral-400">
      <Icon className="text-white h-4 w-4 lg:w-8 lg:h-8"></Icon>
    </div>
  );
};

export default FovoriteButton;
