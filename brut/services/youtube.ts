import axios from "axios";

const KEY = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: { part:'snippet', maxResults:10, key:KEY }
});

export default api