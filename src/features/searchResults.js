import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "~/axios/axios";
import { API_KEY } from "~/request/request";

export const getMovies = createAsyncThunk("result/getMovies", async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}&language=vi-VN`
  );

  return response.data.results;
});

export const resultSlide = createSlice({
  name: "result",
  initialState: {
    status: "idle",
    result: null,
    error: null,
  },
  reducers: {
    clear: (state, action) => {
      state.result = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clear } = resultSlide.actions;

export const selectResult = (state) => state.result.result;

export default resultSlide.reducer;
