import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import img from "~/assets";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "~/axios/axios";
import { API_KEY } from "~/request/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

const c = classNames.bind(styles);

function Banner({ fetchUrl, isTrending = false }) {
  const [movie, setMovie] = useState([]);
  const [modal, setModal] = useState(false);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(fetchUrl);
      const currentMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(currentMovie);
      async function getTrailer() {
        try {
          const response = await axios.get(
            `/movie/${currentMovie?.id}/videos?api_key=${API_KEY}&language=vi-VN`
          );
          const trailerKey = response.data?.results[0]?.key;
          setTrailer(trailerKey);
          return response;
        } catch (error) {
          console.error("Error fetching trailer:", error);
          return null;
        }
      }
      if (currentMovie?.id) {
        getTrailer();
      }
      return request;
    }
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className={c("banner")}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {modal && (
        <Modal
          movie={movie}
          title={"TRENDING NOW"}
          onClick={() => setModal(false)}
        />
      )}
      <section className={c("content")}>
        <div className={c("title-logo")}>
          <h1>{movie?.title || movie?.original_title || movie?.name}</h1>
        </div>
        {isTrending && (
          <div className={c("message")}>
            <div className={c("rate")}>
              <img src={img.rateLogo.default} alt="rate"></img>
            </div>
            #1 trong Chương trình truyền hình hôm nay
          </div>
        )}
        <p>{movie?.overview}</p>
        <div className={c("actions")}>
          <Button
            play
            href={`https://www.youtube.com/watch?v=${trailer}` || null}
            target="_blank"
          >
            <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
            Phát
          </Button>
          <Button moreDesc onClick={() => setModal(true)}>
            Thông tin khác
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginLeft: 10 }} />
          </Button>
        </div>
      </section>
      <div className={c("actions-inner")}>
        <button>
          <img src={img.video_actions.default} alt="action"></img>
        </button>
        <span>
          Hiện tại chỉ xem được trailer, chúng tôi chưa sở hữu source phim
        </span>
      </div>
      <div className={c("fade-Bottom")}></div>
    </section>
  );
}

export default Banner;
