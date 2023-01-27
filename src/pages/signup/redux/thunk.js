import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../../utils/helperFunctions";
import { postSignupDetails as postSignupDetailsAPI} from "./service";

export const postSignupDetails = createAsyncThunk(
  "post/signupDetails",
  async (payload) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        "user-id": 0,
        Authorization: 'Bearer '+ token,
      },
    };
    const response = await postSignupDetailsAPI(payload, params);
    return response.data;
  }
);
