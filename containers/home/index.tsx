import React from "react";

import MoviesData from "@/mocks/movies.json";
import GenresData from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";


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

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}

interface MoviesResponse {
  page: number;
  results: Movie[];
}

const Movies: MoviesResponse = MoviesData;
const Genres: GenresResponse = GenresData;

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
    </div>
  );
}

export default HomeContainer;
