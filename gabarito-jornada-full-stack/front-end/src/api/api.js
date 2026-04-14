import axios from "axios";

const URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const fetchArtists = async () => {
  const response = await axios.get(`${URL}/artists`);
  return response.data;
};

export const fetchSongs = async () => {
  const response = await axios.get(`${URL}/songs`);
  return response.data;
};
