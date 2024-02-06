import Billborad from "@/components/Billborad";
import InfoModal from "@/components/InfoModal";
import MoviesList from "@/components/MoviesList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavoriteMovie from "@/hooks/useFavoriteMovie";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import styles from "@/styles/Home.module.css";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies } = useMovieList();
  const { data: favoriteMovie } = useFavoriteMovie();
  const {isOpen,closeModal} = useInfoModal();

  return (
    <>
    <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
      <Navbar />
      <Billborad />
      
      <main className="lg:mt-10">
      <MoviesList title="Trending" data={movies}></MoviesList>
      <MoviesList title="Favorite" data={favoriteMovie}></MoviesList>

      </main>
      
    </>
  );
}
