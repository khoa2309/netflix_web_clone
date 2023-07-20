import { Link, useNavigate } from "react-router-dom";
import img from "~/assets";
import config from "~/config";
import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { useEffect, useState } from "react";

const c = classNames.bind(styles);

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  });

  return (
    <header
      className={c("inner", {
        black: show,
      })}
    >
      <nav className={c("nav")}>
        <div className={c("logo")}>
          <Link to={config.routes.home}>
            <img src={img.logo.default} alt="Netflix" />
          </Link>
        </div>
        <ul>
          <li>Trang chủ</li>
          <li>Phim T.hình</li>
          <li>Phim</li>
          <li>Mới & Phổ biến</li>
          <li>Danh sách của tôi</li>
          <li>Duyệt tìm theo ngôn ngữ</li>
        </ul>
      </nav>
      <nav className={c("second-nav")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={c("icon")} />
        <Button vibe>Trẻ em</Button>
        <FontAwesomeIcon icon={faBell} className={c("icon")} />
        <div className={c("avatar")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="avt"
            onClick={() => navigate("/profile")}
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
