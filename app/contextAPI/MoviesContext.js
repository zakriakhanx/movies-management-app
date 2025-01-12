'use client'
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    const [movieData, setMovieData] = useState([])

    const API = 'https://itunes.apple.com/search?term=star&country=au&media=movie&all'

    const getMovieData = async () => {

        try {
            const res = await axios.get(API)
            setMovieData(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (
        <MoviesContext.Provider value={movieData}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => {
    return useContext(MoviesContext);
}