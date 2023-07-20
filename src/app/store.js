import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import emailReducer from "../features/emailSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    currentEmail: emailReducer,
  },
});
