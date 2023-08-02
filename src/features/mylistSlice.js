import { createSlice } from "@reduxjs/toolkit";

export const mylistSlide = createSlice({
  name: "mylist",
  initialState: JSON.parse(localStorage.getItem("mylist")) || [],
  reducers: {
    add: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem("mylist", JSON.stringify(newState));
      return newState;
    },
    remove: (state, action) => {
      const newState = state.filter(
        (item, index) => item.id !== action.payload.id
      );
      localStorage.setItem("mylist", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { add, remove } = mylistSlide.actions;

export const selectMylist = (state) => state.mylist;

export default mylistSlide.reducer;
