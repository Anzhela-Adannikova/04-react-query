// Функцію fetchMovies для виконання HTTP-запитів винесіть в окремий файл src/services/movieService.ts. Типізуйте її параметри, результат, який вона повертає, та відповідь від Axios.
import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: ;
}

export const fetchMovies = (query: string): Promise<FetchMoviesResponse> => {
  const config = {
    params: {
      query,
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
      };

  return axios
    .get<FetchMoviesResponse>(API_URL, config)
    .then((res) => res.data);
};