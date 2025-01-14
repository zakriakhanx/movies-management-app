'use client'
import React from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovies } from "./contextAPI/MoviesContext";
import { useState } from "react";
import Pagination from "./components/Pagination";

export default function Home() {

  // Fetching movie data from the MoviesContext.
  const movieData = useMovies();

  // State to track the current page of the movie list.
  const [currentPage, setCurrentPage] = useState(1);

  // State to define how many movies per page.
  const [moviesPerPage, setMoviesPerPage] = useState(10);

  // Calculate the indices for the current page's movies.

  // The index of the last movie on the current page.
  const lastMovieIndex = currentPage * moviesPerPage;

  // The index of the first movie on the current page.
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  // Slice the movieData array to get the movies to display on the current page.
  const currentMovies = movieData.slice(firstMovieIndex, lastMovieIndex);

  return (
    <>
      {/* Render the SearchBar component for searching movies. */}
      <SearchBar />

      {/* Render the MovieGrid component with the currentMovies data. */}
      <MovieGrid movieData={currentMovies} />

      <Pagination
        totalMovies={movieData.length}  // Pass the total number of movies for pagination.
        moviesPerPage={moviesPerPage}  // Pass the number of movies per page.
        setCurrentPage={setCurrentPage}  // Pass the function to change the current page.
        currentPage={currentPage}  // Pass the current page to the Pagination component.
      />

    </>
  );
}
