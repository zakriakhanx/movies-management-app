'use client'

import React from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";

export default function Home() {
  return (
    <>
      <SearchBar/>
      <MovieGrid/>
    </>
  );
}
