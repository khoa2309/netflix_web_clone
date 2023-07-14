import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import Button from "~/components/Button";
import Contact from "../Contact";
import config from "~/config";
const c = classNames.bind(styles);

function Signup({ onlyForm, withContact }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("Bạn cần nhập email");
  const inputRef = useRef(null);

  const isEmail = (value) => {
    let check = false;
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    re.test(value) ? (check = true) : (check = false);
    return check;
  };

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (value) {
      if (!isEmail(value)) {
        setMessage("Email không hợp lệ!!");
        document.getElementById("error-span").style.visibility = "visible";
        document.getElementById("wrapper").style.borderColor = "red";
      } else {
        document.getElementById("error-span").style.visibility = "hidden";
        document.getElementById("wrapper").style.borderColor = "green";
      }
      if (value.search("@") === -1) {
        setMessage("Bạn cần nhập email");
      }
    } else {
      document.getElementById("error-span").style.visibility = "visible";
      document.getElementById("wrapper").style.borderColor = "red";
    }
  };
  const handleClickContact = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (value) {
      if (!isEmail(value)) {
        setMessage("Email không hợp lệ!!");
        document.getElementById("error-span-contact").style.visibility =
          "visible";
        document.getElementById("wrapper-contact").style.borderColor = "red";
      } else {
        document.getElementById("error-span-contact").style.visibility =
          "hidden";
        document.getElementById("wrapper-contact").style.borderColor = "green";
      }
      if (value.search("@") === -1) {
        setMessage("Bạn cần nhập email");
      }
    } else {
      document.getElementById("error-span-contact").style.visibility =
        "visible";
      document.getElementById("wrapper-contact").style.borderColor = "red";
    }
  };
  if (onlyForm) {
    return (
      <form className={c("signup")}>
        <div className={c("form-input")}>
          <input
            ref={inputRef}
            type="email"
            id="email-input"
            value={value}
            name="email"
            autoComplete="email"
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="email-input">Địa chỉ email</label>
          <span id="error-span">
            <FontAwesomeIcon icon={faCircleXmark} className={c("icon")} />
            {message}
          </span>
          <div className={c("wrapper")} id="wrapper"></div>
        </div>
        <Button signup to={config.routes.login} onClick={handleClick}>
          Bắt đầu
        </Button>
      </form>
    );
  }
  if (withContact) {
    return (
      <div className={c("wrapper")}>
        <Contact />
        <form className={c("signup")}>
          <div className={c("form-input")}>
            <input
              ref={inputRef}
              type="email"
              id="email-input"
              value={value}
              name="email"
              autoComplete="email"
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="email-input">Địa chỉ email</label>
            <span id="error-span-contact">
              <FontAwesomeIcon icon={faCircleXmark} className={c("icon")} />
              {message}
            </span>
            <div className={c("wrapper")} id="wrapper-contact"></div>
          </div>
          <Button signup to={config.routes.login} onClick={handleClickContact}>
            Bắt đầu
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
