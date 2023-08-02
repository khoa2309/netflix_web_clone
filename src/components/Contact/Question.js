import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Question.module.scss";

const c = classNames.bind(styles);

function Question({ data }) {
  const { question, answer } = data;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const el_question = [...document.querySelectorAll(".animated")];

    function handleScroll() {
      const isTrue = el_question.some((item) => {
        return isInViewPort(item);
      });
      if (isTrue) {
        setScale(true);
      } else {
        setScale(false);
      }
    }
    function isInViewPort(item) {
      let rect = item.getClientRects()[0];
      return !(rect.bottom < 0 || rect.top > window.innerHeight);
    }
    window.addEventListener("scroll", handleScroll); // Xử lý khi cuộn trang
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scale]);

  const handleClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <div className={c("wrapper")}>
      <div
        className={c("question", { start: scale, animated: true })}
        onClick={handleClick}
      >
        {question}
      </div>
      <div className={c("answer", { show: isAnswerVisible })}>{answer}</div>
    </div>
  );
}

export default Question;
