import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import emailReducer from "../features/emailSlice";
import mylistSlice from "~/features/mylistSlice";
import resultReducer from "~/features/searchResults";

export default configureStore({
  reducer: {
    user: userReducer,
    mylist: mylistSlice,
    currentEmail: emailReducer,
    result: resultReducer,
  },
});
