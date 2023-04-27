import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows, isMoviesAPILoading } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const moviesText = "Harry";
  const showsText = "Friends";

  const check = useSelector(isMoviesAPILoading);
  console.log(check);
  
  useEffect(() => {
    dispatch(fetchAsyncMovies(moviesText));
    dispatch(fetchAsyncShows(showsText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
