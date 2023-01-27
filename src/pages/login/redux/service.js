import { post } from "../../../utils/httpService";

const SERVICE_URLS = {
  postLoginDetails: () => `/auth/login`,
};

export const postLoginDetails = (body, params) => {
  return post(SERVICE_URLS.postLoginDetails(), body, params);
};