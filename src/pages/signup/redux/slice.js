import {
  createSlice,
  current,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { postRegisterDetails } from "./thunk";

const thunks = [postRegisterDetails];

const initialState = {
  status: "idle",
};

export const slice = createSlice({
  name: "signup",
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterDetails.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addMatcher(isPending(...thunks), (state) => {})
      .addMatcher(isFulfilled(postRegisterDetails), (state) => {})
      .addMatcher(isRejected(...thunks), (state, action) => {});
  },
});

export default slice.reducer;
