import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_ACCESS_TOKEN } from "../utils/constants";
import { useEffect } from "react";

const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + API_ACCESS_TOKEN
            }
        };
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options)
        const json = await data.json();
        const filterData = json?.results?.filter(e => e.type === "Trailer") || [];
        const trailer = filterData.length > 0 ? filterData[0] : [];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideos();
    },[])

}

export default useMovieVideo