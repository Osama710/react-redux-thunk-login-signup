import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../../utils/helperFunctions";
import { postLoginDetails as postLoginDetailsAPI} from "./service";

export const postLoginDetails = createAsyncThunk(
  "login/loginDetails",
  async (payload) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        "user-id": 0,
        Authorization: 'Bearer '+ token,
      },
    };
    const response = await postLoginDetailsAPI(payload, params);
    return response.data;
  }
);
