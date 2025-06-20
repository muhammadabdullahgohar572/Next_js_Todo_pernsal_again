import { HttpsResponse } from "../helpers/HttpsResponse";

export const Signup = async (formsData) => {
  try {
    const response = await HttpsResponse.post("/api/user", formsData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error; 
  }
};

export const Login=async(formsData)=>{

  try {
    const response=await HttpsResponse.post("/api/Login",formsData)
    return response.data
  } catch (error) {
    console.log("Login Fail error is ",error)
  }

}