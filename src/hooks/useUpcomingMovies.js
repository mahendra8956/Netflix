import { useDispatch } from "react-redux";
import { API_ACCESS_TOKEN } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

    const getUpcomingMovies = async ()=>{
        const data = await fetch(url,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer '+ API_ACCESS_TOKEN
            }
        }
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json));
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;