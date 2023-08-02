import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

const c = classNames.bind(styles);

function Dropdown({ item, dropdown = false, path, onClick }) {
  return (
    <ul
      className={c("dropdown", {
        show: dropdown,
      })}
    >
      {item.map((item, index) => {
        if (item.link === path) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return (
          <li title={item.title} key={index}>
            <Link
              to={item.link}
              className={c({ active: item.isActive })}
              onClick={onClick}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
