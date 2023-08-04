import { createSlice } from "@reduxjs/toolkit";

export const mylistSlide = createSlice({
  name: "mylist",
  initialState: {
    mylist: JSON.parse(localStorage.getItem("mylist")) || [],
    result: null,
  },
  reducers: {
    add: (state, action) => {
      const newState = [...state.mylist, action.payload];
      localStorage.setItem("mylist", JSON.stringify(newState));
      state.mylist = newState;
    },
    remove: (state, action) => {
      const newState = state.mylist.filter(
        (item, index) => item.id !== action.payload.id
      );
      localStorage.setItem("mylist", JSON.stringify(newState));
      state.mylist = newState;
    },
    restore: (state, action) => {
      return {
        mylist: JSON.parse(localStorage.getItem("mylist")) || [],
        result: null,
      };
    },
    fill: (state, action) => {
      const newState = state.mylist.filter((item) => {
        return (
          item?.title?.toLowerCase().includes(action.payload.toLowerCase()) ||
          item?.name?.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
      state.result = newState;
    },
  },
});

export const { add, remove, restore, fill } = mylistSlide.actions;

export const selectMylist = (state) => state.mylist.mylist;

export const selectMylistResult = (state) => state.mylist.result;

export default mylistSlide.reducer;
