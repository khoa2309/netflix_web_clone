import { useNavigate, Link } from "react-router-dom";
import img from "~/assets";
import config from "~/config";
import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCaretDown,
  faCaretRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { clear, getMovies } from "~/features/searchResults";
import { fill, restore } from "~/features/mylistSlice";

const c = classNames.bind(styles);

const NavLinks = [
  {
    title: "Trang chủ",
    link: "/home",
    isActive: true,
  },
  {
    title: "Thể loại",
    isActive: false,
    children: [
      {
        title: "Hành động",
        link: "/action",
        isActive: false,
      },
      {
        title: "Hài hước",
        link: "/comedy",
        isActive: false,
      },
      {
        title: "Kinh dị",
        link: "/horror",
        isActive: false,
      },
      {
        title: "Lãng mạn",
        link: "/romance",
        isActive: false,
      },
      {
        title: "Tài liệu",
        link: "/documentaries",
        isActive: false,
      },
    ],
  },
  {
    title: "Danh sách của bạn",
    link: "/mylist",
    isActive: false,
  },
];

function Nav({ path }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleSroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleMyList = (e, value) => {
    e.preventDefault();
    if (path === "/mylist") {
      if (value === "") {
        dispatch(restore());
      } else {
        dispatch(fill(value));
      }
    } else {
      dispatch(getMovies(value));
    }
  };

  useEffect(() => {
    inputRef.current.value = "";
    dispatch(clear());
    setSearch(false);
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

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
          {NavLinks.map((item, index) => {
            const isParent = !!item.children;
            if (item.link === path) {
              item.isActive = true;
            } else {
              item.isActive = false;
            }
            return (
              <li title={item.title} key={index}>
                {isParent ? (
                  <>
                    <div onClick={() => setDropdown((prev) => !prev)}>
                      <Link>{item.title}</Link>
                      {dropdown ? (
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className={c("icon")}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className={c("icon")}
                        />
                      )}
                    </div>
                    <Dropdown
                      item={item.children}
                      dropdown={dropdown}
                      path={path}
                      onClick={() => setDropdown(false)}
                    />
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={c({ active: item.isActive })}
                    onClick={() => {
                      setDropdown(false);
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={c("second-nav")}>
        <form
          className={c("container", { open: search })}
          onSubmit={(e) => handleMyList(e, inputRef.current.value)}
        >
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => handleMyList(e, e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={c("icon_search")}
            onClick={() => {
              setSearch(!search);
              if (!search) {
                inputRef.current.focus();
              }
            }}
          />
        </form>

        <FontAwesomeIcon icon={faBell} className={c("icon")} />
        <div className={c("avatar")}>
          <img
            src="https://occ-0-395-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYNwAakf94HfoVx6gz2x8vcyNJa3tTYZPqdyGDJ93nPbawb7vDV7U60_-S5D6yxeDBw1LcQVb01i60Qpgtot-BiSKM179cXngQ.png?r=962"
            alt="avt"
            onClick={() => navigate("/profile")}
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
