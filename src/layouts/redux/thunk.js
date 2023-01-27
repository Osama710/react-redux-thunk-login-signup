import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAuthToken as getAuthTokenAPI } from "./service";

export const getAuthToken = createAsyncThunk(
  "auth/token", async () => {
    const body = {
      deviceId: `${Math.random()}`,
      platform: "web",
    };
    // const params = {
    //   headers: {
    //   deviceId: `${Math.random()}`,
    //   // deviceId: `1212bh23293njnde2ss`,
    //   platform: "web",
    //   },
    // };
    const response = await getAuthTokenAPI(body);
    return response.data;
  }
);
