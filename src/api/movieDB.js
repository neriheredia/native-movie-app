import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "918a21fc87f68147bc8fc8fab5e803f3",
    language: "es-ES",
  },
});

export default movieDB
