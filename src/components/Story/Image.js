import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import { useEffect, useRef, useState, useCallback } from "react";
const c = classNames.bind(styles);

function Image({ title, desc, imgURL, posterURL }) {
  const [moveImg, setMoveImg] = useState(false);
  const rtlRef = useRef([]);

  const handleScroll = useCallback(() => {
    const isTrue = rtlRef.current.some((item) => {
      return isInViewPort(item);
    });
    setMoveImg(isTrue);
  }, []);

  useEffect(() => {
    rtlRef.current = [...document.querySelectorAll(".rtl")];
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isInViewPort = (item) => {
    let rect = item.getClientRects()[0];
    return !(rect.bottom < 50 || rect.top > window.innerHeight - 50);
  };

  return (
    <div className={c("image")}>
      <div className={c("main", { start: moveImg, rtl: true })}>
        <img src={imgURL} alt="video" />

        {posterURL && (
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
        )}
      </div>

      <div className={c("sub", { start: moveImg })}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Image;
