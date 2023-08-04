import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import img from "~/assets";
import { Link } from "react-router-dom";
import config from "~/config";
import Button from "~/components/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

const c = classNames.bind(styles);

function Header({ path }) {
  const navigate = useNavigate();
  return (
    <header className={c("inner")}>
      <Link to={config.routes.guest}>
        <img src={img.logo.default} alt="Netflix" />
      </Link>
      {path === "/" && (
        <div className={c("actions")}>
          <Button login onClick={() => navigate("/login")}>
            Đăng nhập
          </Button>
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);
