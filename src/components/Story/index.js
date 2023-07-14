import classNames from "classnames/bind";
import styles from "./Story.module.scss";
const c = classNames.bind(styles);
function Story({ video, image, ...props }) {
  if (video) {
    const { title, desc, imgURL, videoURL, fit } = video;
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
  if (image) {
    const { title, desc, imgURL, posterURL } = image;
    return (
      <div className={c("image")}>
        <div className={c("main")}>
          <img src={imgURL} alt="video" />

          {posterURL ? (
            <div className={c("card")}>
              <div className={c("poster")}>
                <img src={posterURL} alt="" />
              </div>
              <div className={c("title-card")}>
                <p>Cậu bé mất tích</p>
                <p>Đang tải xuống...</p>
              </div>
              <div className={c("animation")}></div>
            </div>
          ) : null}
        </div>

        <div className={c("sub")}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

export default Story;
