import classNames from "classnames/bind";
import styles from "./Trailer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const c = classNames.bind(styles);

function Trailer({ trailer, onClick }) {
  return (
    <div className={c("iframe")}>
      <div className={c("iframe-wrap")}>
        <iframe
          className={c("video")}
          title="YouTube Video"
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder={0}
          allowFullScreen
        ></iframe>
        <FontAwesomeIcon
          icon={faClose}
          className={c("icon-inner")}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Trailer;
