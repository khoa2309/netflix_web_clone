import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import React from "react";
const c = classNames.bind(styles);

function Video({ title, desc, imgURL, videoURL, fit }) {
  return (
    <div className={c("video")}>
      <div className={c("sub")}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className={c("main")}>
        <img src={imgURL} alt="video" />
        <div className={c(fit ? "fit" : "unfit")}>
          <video autoPlay playsInline muted loop>
            <source src={videoURL} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Video);
