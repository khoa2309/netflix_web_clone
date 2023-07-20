import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const c = classNames.bind(styles);

const link = [
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
const FooterLogin = [
  {
    title: "Câu hỏi thường gặp",
  },
  {
    title: "Trung tâm trợ giúp",
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
];

function Footer({ SignIn = false, SignUp = false }) {
  if (SignUp) {
    return (
      <footer className={c("wrapper")}>
        <a href="/" className={c("title")}>
          Bạn có câu hỏi? Liên hệ với chúng tôi
        </a>
        <ul className={c("list")}>
          {link.map((link, index) => (
            <li key={index}>
              <a href="/">{link.title}</a>
            </li>
          ))}
        </ul>
        <p>Netflix Việt Nam</p>
      </footer>
    );
  }
  if (SignIn) {
    return (
      <footer className={c("wrapper")}>
        <a href="/" className={c("title")}>
          Bạn có câu hỏi? Liên hệ với chúng tôi
        </a>
        <ul className={c("list")}>
          {FooterLogin.map((link, index) => (
            <li key={index}>
              <a href="/">{link.title}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
