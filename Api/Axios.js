import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/shakeebM/StoriesApi/stories";

export const getData=async(url)=>{
  try {
    const response = await axios.get(`${baseURL}${url}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
}