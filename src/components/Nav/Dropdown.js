import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

const c = classNames.bind(styles);

function Dropdown({ item, dropdown = false, path, onClick }) {
  return (
    <ul className={c("dropdown", { show: dropdown })}>
      {item.map((menu) => {
        const isActive = menu.link === path;
        return (
          <li key={menu.title}>
            <Link
              to={menu.link}
              className={c({ active: isActive })}
              onClick={onClick}
              title={menu.title}
            >
              {menu.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
