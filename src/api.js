import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_API_KEY;
const headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const fetchImages = async (image, page = 1) => {
  const searchUrl = `/search/photos?page=${page}&per_page=20&query=${image}`;
  const response = await axios.get(searchUrl, { headers });
  return response.data;
};
