import { useDispatch } from "react-redux"
import { API_ACCESS_TOKEN } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatesMovies = ()=>{
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/top_rated?page=1';

    const getTopRatedMovies = async ()=>{
        const data = await fetch(url,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + API_ACCESS_TOKEN
            }
        });
        const json = await data.json();
        dispatch(addTopRatedMovies(json));
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
}

export default useTopRatesMovies;