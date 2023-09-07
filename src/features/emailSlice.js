import { createSlice } from "@reduxjs/toolkit";

export const emailSlide = createSlice({
  name: "currentEmail",
  initialState: "",
  reducers: {
    setcurrValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setcurrValue } = emailSlide.actions;

export const selectEmail = (state) => state.currentEmail;

export default emailSlide.reducer;
