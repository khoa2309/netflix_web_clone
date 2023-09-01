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
    const isTrue = isInViewPort(questionRef.current);
    if (isTrue) {
      setScale(isTrue);
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
    <div className={c("wrapper", { start: scale })} ref={questionRef}>
      <div
        className={c("question")}
        onClick={() => setIsAnswerVisible(!isAnswerVisible)}
      >
        {question}
      </div>
      <div className={c("answer", { show: isAnswerVisible })}>{answer}</div>
    </div>
  );
}

export default Question;
