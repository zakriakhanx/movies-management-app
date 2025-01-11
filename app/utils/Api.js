import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Api = () => {

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


    return movieData;
    
}

export default Api
