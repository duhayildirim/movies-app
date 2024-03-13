import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Props {
  title: string;
  movies: Movie[];
}

const MoviesSection: React.FC<Props> = ({ title, movies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
