import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_ACCESS_TOKEN } from "../utils/constants";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
    const getPopularMovies = async ()=>{
        const data = await fetch(url,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + API_ACCESS_TOKEN
            }
        });
        const json = await data.json();
        dispatch(addPopularMovies(json));
    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}

export default usePopularMovies;