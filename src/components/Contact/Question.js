import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Question.module.scss";

const c = classNames.bind(styles);

function Question({ data }) {
  const { question, answer } = data;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className={c("wrapper")}>
      <div className={c("question")} onClick={handleClick}>
        {question}
      </div>
      <div className={c("answer", { show: isAnswerVisible })}>{answer}</div>
    </div>
  );
}

export default Question;
