import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import { useEffect, useState } from "react";
const c = classNames.bind(styles);

function Image({ title, desc, imgURL, posterURL }) {
  const [move_img, setMove_img] = useState(false);

  useEffect(() => {
    const el_img = [...document.querySelectorAll(".rtl")];

    function handleScroll() {
      const isTrue = el_img.some((item) => {
        return isInViewPort(item);
      });
      if (isTrue) {
        setMove_img(true);
      } else {
        setMove_img(false);
      }
    }
    function isInViewPort(item) {
      let rect = item.getClientRects()[0];
      return !(rect.bottom < 50 || rect.top > window.innerHeight - 50);
    }
    window.addEventListener("scroll", handleScroll); // Xử lý khi cuộn trang
    return () => window.removeEventListener("scroll", handleScroll);
  }, [move_img]);
  return (
    <div className={c("image")}>
      <div className={c("main", { start: move_img, rtl: true })}>
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

      <div className={c("sub", { start: move_img })}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Image;
