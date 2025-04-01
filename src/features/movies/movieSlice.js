import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/Apis/movieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "fetchAsyncShows",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=series`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`).catch((err) => {
      console.log("Err: ", err);
    });
    return response.data;
  }
);


const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetchAsyncMovies/pending", (state, action) => {
      console.log("Pending", action);
    }).addCase("fetchAsyncMovies/fulfilled", (state, action) => {
      return { ...state, movies: action.payload }
    }).addCase("fetchAsyncMovies/rejected", (state, action) => {
      console.log("Rejected", action);
    }).addCase("fetchAsyncShows/pending", (state, action) => {
      console.log("Pending", action);
    }).addCase("fetchAsyncShows/fulfilled", (state, action) => {
      return { ...state, shows: action.payload }
    }).addCase("fetchAsyncShows/rejected", (state, action) => {
      console.log("Rejected", action);
    }).addCase("fetchAsyncMovieOrShowDetail/fullfilled", (state, action) => {
      return { ...state, selectedMovieOrShow: action.payload }
    })
  }
});

    export const { removeSelectedMovieOrShow } = movieSlice.actions;
    export const getAllMovies = (state) => state.movies.movies;
    export const getAllShows = (state) => state.movies.shows;
    export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
    export const isMoviesAPILoading = (state) => state.movies.isMoviesAPILoading;
    export default movieSlice.reducer;
