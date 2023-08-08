import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCheck,
  faClose,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import img from "~/assets";
import axios from "~/axios/axios";
import { API_KEY } from "~/request/request";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, selectMylist } from "~/features/mylistSlice";
import Trailer from "../Trailer";
import styles from "./Modal.module.scss";

const c = classNames.bind(styles);

function Modal({ movie, title, onClick }) {
  const [trailer, setTrailer] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const mylist = useSelector(selectMylist);
  const dispatch = useDispatch();

  useEffect(() => {
    const isInclude = mylist.some((item) => item.id === movie.id);
    setIsCurrent(isInclude);

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
  }, [mylist, movie]);

  const toggleAddToMyList = () => {
    const action = isCurrent ? remove : add;
    dispatch(action({ ...movie }));
  };

  const renderNotice = () => {
    return (
      <p className={c("notice")}>
        This movie has no trailer, please choose another movie
        <Button login onClick={() => setShowNotice(false)}>
          OK
        </Button>
      </p>
    );
  };

  const renderTrailer = () => {
    return <Trailer trailer={trailer} onClick={() => setShowTrailer(false)} />;
  };

  const renderContent = () => {
    return (
      <div className={c("content", { small: !!!movie.backdrop_path })}>
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
              {trailer ? (
                <Button play onClick={() => setShowTrailer(true)}>
                  <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
                  Phát
                </Button>
              ) : (
                <Button play onClick={() => setShowNotice(true)}>
                  <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
                  Phát
                </Button>
              )}

              <FontAwesomeIcon
                icon={isCurrent ? faCheck : faAdd}
                className={c("btn-add")}
                title={
                  isCurrent
                    ? "Xóa khỏi danh sách của tôi"
                    : "Thêm vào danh sách của tôi"
                }
                onClick={toggleAddToMyList}
              />
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
    );
  };

  return (
    <>
      {showNotice && renderNotice()}
      {showTrailer && renderTrailer()}
      <div className={c("modal")}>{renderContent()}</div>
    </>
  );
}

export default Modal;
