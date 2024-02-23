import Billborad from "@src/components/Billborad";
import InfoModal from "@src/components/InfoModal";
// import Layout from "@/components/Layout";
import MoviesList from "@src/components/MoviesList";
import Navbar from "@src/components/Navbar";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useFavoriteMovie from "@src/hooks/useFavoriteMovie";
import useInfoModal from "@src/hooks/useInfoModal";
import useMovieList from "@src/hooks/useMovieList";
import styles from "@/styles/Home.module.css";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Movie() {
  const { data: user } = useCurrentUser();
  const { data: movies } = useMovieList();
  const { data: favoriteMovie } = useFavoriteMovie();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <Navbar />
      <Billborad />

      <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>

      <main className="lg:mt-10">
        <MoviesList title="Trending" data={movies}></MoviesList>
        <MoviesList title="Favorite" data={favoriteMovie}></MoviesList>
      </main>
    </>
  );
}
