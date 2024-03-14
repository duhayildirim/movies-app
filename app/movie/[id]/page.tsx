import React from 'react';
import MoviesData from '@/mocks/movies.json'
import MovieContainer from '@/containers/movie';

interface Params {
  id: string;
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

function MoviePage({ params }: { params: Params }) {
  const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id);
  
  return (
    <MovieContainer movie={movieDetail}/>
  );
}

export default MoviePage;


