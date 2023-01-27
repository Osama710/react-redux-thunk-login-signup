import { post } from "../../../utils/httpService";

const SERVICE_URLS = {
  postSignupDetails: () => `/auth/register`,
};

export const postSignupDetails = (body, params) => {
  return post(SERVICE_URLS.postSignupDetails(), body, params);
};