'use client'
import React from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovies } from "./contextAPI/MoviesContext";
import { useState } from "react";
import Pagination from "./components/Pagination";

export default function Home() {

  const movieData = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movieData.slice(firstMovieIndex, lastMovieIndex);

  return (
    <>
      <SearchBar />
      
      <MovieGrid movieData={currentMovies} />

      <Pagination
        totalMovies={movieData.length}
        moviesPerPage={moviesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </>
  );
}
