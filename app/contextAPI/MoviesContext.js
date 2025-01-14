'use client'
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Creating a context to manage the movies data globally.
const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    // State to hold the fetched movie data
    const [movieData, setMovieData] = useState([])

    // API endpoint to fetch movie data
    const API = 'https://itunes.apple.com/search?term=star&country=au&media=movie&all'

    // Function to fetch movie data from the API
    const getMovieData = async () => {

        try {
            // Making a GET request to the API
            const res = await axios.get(API)
            setMovieData(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    // Using the useEffect hook to fetch movie data once when the component mounts
    useEffect(() => {
        getMovieData();
    }, [])

    return (
        // Providing the movie data to all child components through the context
        <MoviesContext.Provider value={movieData}>
            {children}
        </MoviesContext.Provider>
    )
}

// Custom hook to allow child components to consume the movie data from context
export const useMovies = () => {
    return useContext(MoviesContext);
}