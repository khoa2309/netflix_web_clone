import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Question.module.scss";

const c = classNames.bind(styles);

function Question({ data }) {
  const { question, answer } = data;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [scale, setScale] = useState(false);
  const questionRef = useRef(null);

  const handleScroll = useCallback(() => {
    const isInViewPort = () => {
      const element = questionRef.current;
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return !(rect.bottom < 0 || rect.top > window.innerHeight);
    };
    setScale(isInViewPort());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={c("wrapper")}>
      <div
        ref={questionRef}
        className={c("question", { start: scale })}
        onClick={() => setIsAnswerVisible(!isAnswerVisible)}
      >
        {question}
      </div>
      <div className={c("answer", { show: isAnswerVisible })}>{answer}</div>
    </div>
  );
}

export default Question;
