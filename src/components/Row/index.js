import classNames from "classnames/bind";
import styles from "./Row.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "~/axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { selectMylist } from "~/features/mylistSlice";
const c = classNames.bind(styles);
function Row({
  title,
  fetchUrl,
  result,
  isLargeRow = false,
  isMyList = false,
  isTypeList = false,
}) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);
  const [modal, setModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const mylist = useSelector(selectMylist);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const handleScrollRight = () => {
    rowRef.current.scrollLeft += 1000;
    const { scrollWidth, scrollLeft, clientWidth } = rowRef.current;
    setScrollLeft(true);
    if (scrollLeft + clientWidth + 1000 >= scrollWidth) {
      setScrollRight(false);
    }
  };
  const handleScrollLeft = () => {
    rowRef.current.scrollLeft -= 1000;
    const x = rowRef.current.scrollLeft;
    setScrollRight(true);
    if (x - 1000 <= 0) {
      setScrollLeft(false);
    }
  };
  const openModal = (movie) => {
    setCurrentMovie(movie);
    setModal(true);
  };

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fecthData();
  }, [fetchUrl, movies]);

  return (
    <>
      {result ? (
        <div className={c("row")}>
          {modal && (
            <Modal
              movie={currentMovie}
              title={title}
              onClick={() => setModal(false)}
            />
          )}
          <h2>Results for you</h2>
          <div
            className={c("row_posters", { isMyList, isTypeList })}
            ref={rowRef}
          >
            {result.length >= 1 &&
              result.map(
                (movie, index) =>
                  ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <div className={c("inner")} key={movie.id}>
                      <img
                        className={c("row_poster", {
                          row_posterLarge: isLargeRow,
                        })}
                        src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={() => openModal(movie)}
                      />
                      <p>{movie.name || movie.title}</p>
                    </div>
                  )
              )}
          </div>
        </div>
      ) : (
        <div className={c("row")}>
          {modal && (
            <Modal
              movie={currentMovie}
              title={title}
              onClick={() => setModal(false)}
            />
          )}
          <h2>{title}</h2>
          <div
            className={c("row_posters", { isMyList, isTypeList })}
            ref={rowRef}
          >
            {scrollLeft && !isMyList && !isTypeList && (
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className={c("icon-left")}
                onMouseDown={handleScrollLeft}
              />
            )}
            {mylist.length >= 1 &&
              isMyList &&
              mylist.map(
                (movie, index) =>
                  ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <div className={c("inner")} key={movie.id}>
                      <img
                        className={c("row_poster", {
                          row_posterLarge: isLargeRow,
                        })}
                        src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={() => openModal(movie)}
                      />
                      <p>{movie.name || movie.title}</p>
                    </div>
                  )
              )}
            {movies &&
              movies.length >= 1 &&
              movies.map(
                (movie, index) =>
                  ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <div className={c("inner")} key={movie.id}>
                      <img
                        className={c("row_poster", {
                          row_posterLarge: isLargeRow,
                        })}
                        src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={() => openModal(movie)}
                      />
                      <p>{movie.name || movie.title}</p>
                    </div>
                  )
              )}
            {scrollRight && !isMyList && !isTypeList && (
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={c("icon-right")}
                onMouseDown={handleScrollRight}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Row;
