import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import img from "~/assets";
import { Link } from "react-router-dom";
import config from "~/config";
import Button from "~/components/Button";

const c = classNames.bind(styles);

export default function Header() {
  return (
    <header className={c("inner")}>
      <Link to={config.routes.guest}>
        <img src={img.logo.default} alt="Netflix" />
      </Link>
      <div className={c("actions")}>
        <Button login to={config.routes.login}>
          Đăng nhập
        </Button>
      </div>
    </header>
  );
}
