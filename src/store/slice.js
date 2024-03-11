import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {name: "js dev"},
    genres: {},
  },
  reducers: {
    getApiConfig: (state, actions) => {
      state.url = actions.payload;
    },
    getGenres: (state, actions) => {
      state.genres = actions.payload;
    },
  },
});

export const { getApiConfig, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
