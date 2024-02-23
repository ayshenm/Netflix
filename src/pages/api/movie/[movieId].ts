import serverAuth from "@src/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@src/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error("invalid id");
    }

    if (!movieId) {
      throw new Error("Missing id");
    }

    const moviesId = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    return res.status(200).json(moviesId);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
