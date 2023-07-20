import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Button from "~/components/Button";
import { auth } from "~/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "~/features/userSlice";

const c = classNames.bind(styles);

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className={c("profile")}>
      <h1>Edit Profile</h1>
      <div className={c("profile__info")}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="avatar"
        />
        <div className={c("profile__details")}>
          <h2>{user?.email}</h2>
          <div className={c("profile__plans")}>
            <h3>Plans</h3>
            <Button
              SignOut
              onClick={() => {
                auth.signOut();
                navigate("/");
              }}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
