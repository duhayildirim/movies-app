import React from "react";
import MoviesData from "@/mocks/movies.json";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

interface Params {
  [key: string]: string;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesResponse {
  page: number;
  results: Movie[];
}

const Movies: MoviesResponse = MoviesData;

interface MoviePageProps {
  params: Params;
  searchParams?: { [key: string]: string };
}

const MoviePage: React.FC<MoviePageProps> = ({ params, searchParams }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }

  if (searchParams?.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
