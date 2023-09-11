import axios from "axios";

export const api = axios.create({
  baseURL: process.env.baseUrl,
  params: {
    part: 'snippet',
    maxResults: 10,
    key: process.env.key,
  },
})