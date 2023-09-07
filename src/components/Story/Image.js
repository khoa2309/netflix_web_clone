import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import { useEffect, useRef, useState, useCallback } from "react";
const c = classNames.bind(styles);

function Image({ title, desc, imgURL, posterURL }) {
  const [moveImg, setMoveImg] = useState(false);
  const animationRef = useRef(null);

  const handleScroll = useCallback(() => {
    const isTrue = isInViewPort(animationRef.current);
    if (isTrue) {
      setMoveImg(isTrue);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isInViewPort = (item) => {
    let rect = item.getClientRects()[0];
    return !(rect.bottom < 50 || rect.top > window.innerHeight - 50);
  };

  return (
    <div className={c("image", { start: moveImg })} ref={animationRef}>
      <div className={c("main")}>
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

      <div className={c("sub")}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Image;
