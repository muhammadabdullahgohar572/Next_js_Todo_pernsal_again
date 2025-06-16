import { HttpsResponse } from "../helpers/HttpsResponse";

export const Signup = async (request, { formsData }) => {
  try {
    const response = await HttpsResponse.post("/api/user", formsData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
