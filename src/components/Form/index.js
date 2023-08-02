/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames/bind";
import styles from "./Form.module.scss";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "~/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEmail } from "~/features/emailSlice";

const c = classNames.bind(styles);
function Form() {
  const currentEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState(currentEmail);
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(
          "Chúc mừng " + userCredential.user.email + " đã đăng ký thành công"
        );
        setToggle(!toggle);
      })
      .catch((error) => {
        alert(error.message.slice(10, error.length));
      });
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(
          "Chúc mừng " + userCredential.user.email + " đã đăng nhập thành công"
        );
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message.slice(10, error.length));
      });
  };

  return (
    <form className={c("wrapper")}>
      {toggle ? <h1>Đăng nhập</h1> : <h1>Đăng ký</h1>}
      <div className={c("email")}>
        <input
          type="email"
          name="email"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email-input">Email hoặc số điện thoại</label>
      </div>
      <div className={c("password")}>
        <input
          value={password}
          type="password"
          name="password"
          id="password-input"
          minLength={4}
          maxLength={60}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password-input">Mật khẩu</label>
      </div>
      {toggle ? (
        <Button login large onClick={login}>
          Đăng nhập
        </Button>
      ) : (
        <Button login large onClick={register}>
          Đăng ký
        </Button>
      )}
      <div className={c("memory")}>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className={c("my-label")}>
          Ghi nhớ tôi
        </label>
        <a href="/help">Bạn cần trợ giúp?</a>
      </div>
      <p className={c("link-signup")}>
        {toggle ? "Bạn mới tham gia Netflix?" : "Bạn đã đăng ký thành công?"}
        {toggle ? (
          <Link onClick={() => setToggle(false)}>Đăng ký tại đây</Link>
        ) : (
          <Link onClick={() => setToggle(true)}>Đăng nhập thôi nào!</Link>
        )}
      </p>
      <p className={c("more-desc")}>
        <span>
          Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
          robot.
        </span>
        &nbsp;
        {show ? (
          <p className={c("info")} data-uia="recaptcha-disclosure-text">
            Thông tin do Google reCAPTCHA thu thập sẽ tuân theo{" "}
            <a href="https://policies.google.com/privacy" target="_blank">
              Chính sách Quyền riêng tư
            </a>{" "}
            và{" "}
            <a href="https://policies.google.com/terms" target="_blank">
              Điều khoản dịch vụ
            </a>{" "}
            của Google, và được dùng để cung cấp, duy trì và cải thiện dịch vụ
            reCAPTCHA cũng như các mục đích bảo mật nói chung (thông tin này
            không được dùng để cá nhân hóa quảng cáo của Google).
          </p>
        ) : (
          <span onClick={() => setShow(true)}>Tìm hiểu thêm.</span>
        )}
      </p>
    </form>
  );
}

export default Form;
