import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_ACCESS_TOKEN } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const getNowPlayingMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + API_ACCESS_TOKEN
            }
        };

        const data = await fetch(url, options)
        const json =  await data.json();
        dispatch(addNowPlayingMovies(json))
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;