import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
import img from "~/assets";

const c = classNames.bind(styles);

const links = [
  {
    title: "Câu hỏi thường gặp",
  },
  {
    title: "Trung tâm trợ giúp",
  },
  {
    title: "Tài khoản",
  },
  {
    title: "Trung tâm đa phương tiện",
  },
  {
    title: "Quan hệ với nhà đầu tư",
  },
  {
    title: "Việc làm",
  },
  {
    title: "Các cách xem",
  },
  {
    title: "Điều khoản sử dụng",
  },
  {
    title: "Quyền riêng tư",
  },
  {
    title: "Tùy chọn cookie",
  },
  {
    title: "Thông tin doanh nghiệp",
  },
  {
    title: "Liên hệ với chúng tôi",
  },
  {
    title: "Kiểm tra tốc độ",
  },
  {
    title: "Thông báo pháp lý",
  },
  {
    title: "Chỉ có trên Netflix",
  },
];

function Footer({ SignIn = false, SignUp = false }) {
  const footerLinks = SignIn ? links.slice(0, 4) : links;

  return (
    <footer className={c("wrapper")}>
      <a href="/" className={c("title")}>
        Bạn có câu hỏi? Liên hệ với chúng tôi
      </a>
      <ul className={c("list")}>
        {footerLinks.map((link, index) => (
          <li key={index}>{link.title}</li>
        ))}
      </ul>
      <Link to={config.routes.guest}>
        <img src={img.logo.default} alt="Netflix" height={40} />
      </Link>
      {SignUp && <p>Netflix Việt Nam</p>}
    </footer>
  );
}

export default Footer;
