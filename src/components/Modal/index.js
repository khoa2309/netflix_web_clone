import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheck,
  faClose,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import img from "~/assets";
import { useEffect, useState } from "react";
import axios from "~/axios/axios";
import { API_KEY } from "~/request/request";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, selectMylist } from "~/features/mylistSlice";
const c = classNames.bind(styles);

function Modal({ movie, onClick, title = false }) {
  const [trailer, setTrailer] = useState("");
  const [current, setCurrent] = useState(false);
  const mylist = useSelector(selectMylist);
  const dispatch = useDispatch();
  useEffect(() => {
    const isInclude = mylist.some((item) => item.id === movie.id);
    if (isInclude) {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
    async function getTrailer() {
      try {
        const response = await axios.get(
          `/movie/${movie?.id}/videos?api_key=${API_KEY}&language=vi-VN`
        );
        const trailerKey = response.data?.results[0]?.key;
        setTrailer(trailerKey);
        return response;
      } catch (error) {
        console.error("Error fetching trailer:", error);
        return null;
      }
    }
    if (movie?.id) {
      getTrailer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mylist]);
  return (
    <div className={c("modal")}>
      <div
        className={c("content", {
          small: !!!movie.backdrop_path,
        })}
      >
        <div className={c("inner")}>
          <FontAwesomeIcon
            icon={faClose}
            className={c("icon")}
            onClick={onClick}
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }`}
            alt="movie"
          />
          <div className={c("fade-Bottom")}></div>
          <div className={c("title-logo")}>
            <h1>{movie?.title || movie?.original_title || movie?.name}</h1>
            <div className={c("actions")}>
              <Button
                play
                href={`https://www.youtube.com/watch?v=${trailer}` || null}
                target="_blank"
              >
                <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
                Phát
              </Button>
              {current ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={c("btn-add")}
                  title="Xóa khỏi danh sách của tôi"
                  onClick={() => dispatch(remove({ ...movie }))}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAdd}
                  className={c("btn-add")}
                  title="Thêm vào danh sách của tôi"
                  onClick={() => dispatch(add({ ...movie }))}
                />
              )}
            </div>
            <div className={c("more-desc")}>
              <p className={c("like")}>
                Lượt yêu thích: {Math.round(movie?.popularity)}
              </p>
              <p>{movie?.release_date}</p>
            </div>
            {title === "TRENDING NOW" && (
              <div className={c("message")}>
                <div className={c("rate")}>
                  <img src={img.rateLogo.default} alt="rate"></img>
                </div>
                #1 trong Chương trình truyền hình hôm nay
              </div>
            )}
            {movie?.adult && <p className={c("adult")}>18+</p>}
            <p className={c("desc")}>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
