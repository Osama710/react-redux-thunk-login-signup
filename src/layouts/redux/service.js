import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  getAuthToken: () => `/auth/token`,
};

export const getAuthToken = (body) => {
  return post(SERVICE_URLS.getAuthToken(), body);
};
