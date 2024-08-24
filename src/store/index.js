import {configureStore} from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    bag: bagSlice.reducer,
  }
});

export default myntraStore;