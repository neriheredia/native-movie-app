import { useEffect, useState } from "react";
import movieDB from "../api/movieDB.js";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get("/now_playing");
    const popularPromise = movieDB.get("/popular");
    const topRatedPromise = movieDB.get("/top_rated");
    const upcomingPromise = movieDB.get("/upcoming");

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
