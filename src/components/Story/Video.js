import classNames from "classnames/bind";
import styles from "./Story.module.scss";
const c = classNames.bind(styles);
function Video({ title, desc, imgURL, videoURL, fit }) {
  return (
    <div>
      <div className={c("video")}>
        <div className={c("sub")}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className={c("main")}>
          <img src={imgURL} alt="video" />
          {fit ? (
            <video autoPlay playsInline muted loop className={c("fit")}>
              <source src={videoURL} type="video/mp4"></source>
            </video>
          ) : (
            <video autoPlay playsInline muted loop className={c("unfit")}>
              <source src={videoURL} type="video/mp4"></source>
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
