import classNames from "classnames/bind";
import styles from "./Row.module.scss";
import { useEffect, useState } from "react";
import axios from "~/axios/axios";
const c = classNames.bind(styles);
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fecthData();
  }, [fetchUrl]);

  useEffect(() => {});
  return (
    <div className={c("row")}>
      <h2>{title}</h2>
      <div className={c("row_posters")}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={c("row_poster", { row_posterLarge: isLargeRow })}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
