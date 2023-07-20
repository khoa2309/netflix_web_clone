import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import img from "~/assets";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "~/axios/axios";
import requests from "~/request/request";

const c = classNames.bind(styles);

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fecthData();
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
      <section className={c("content")}>
        <div className={c("title-logo")}>
          {/* <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt="title-logo"
          /> */}
          <h1>{movie?.title || movie?.original_title || movie?.name}</h1>
        </div>
        <div className={c("message")}>
          <div className={c("rate")}>
            <img src={img.rateLogo.default} alt="rate"></img>
          </div>
          #1 trong Chương trình truyền hình hôm nay
        </div>
        <p>{movie?.overview}</p>
        <div className={c("actions")}>
          <Button play>Phát</Button>
          <Button moreDesc>Thông tin khác</Button>
        </div>
      </section>
      <div className={c("actions-inner")}>
        <button>
          <img src={img.video_actions.default} alt="action"></img>
        </button>
        <span>13+</span>
      </div>
      <div className={c("fade-Bottom")}></div>
    </section>
  );
}

export default Banner;
