import Form from "~/components/Form";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectUser } from "~/features/userSlice";
const c = classNames.bind(styles);
export default function SignIn() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);
  return (
    <div className={c("wrapper")}>
      <div className={c("background")}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/6ae246b1-b424-4e72-a217-f7895602959a/VN-vi-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="back"
        />
      </div>
      <div className={c("form")}>
        <Form />
      </div>
      <div className={c("footer")}>
        <Footer SignIn />
      </div>
    </div>
  );
}
