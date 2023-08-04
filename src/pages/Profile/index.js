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
          src="https://occ-0-395-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYNwAakf94HfoVx6gz2x8vcyNJa3tTYZPqdyGDJ93nPbawb7vDV7U60_-S5D6yxeDBw1LcQVb01i60Qpgtot-BiSKM179cXngQ.png?r=962"
          alt="avatar"
        />
        <div className={c("profile__details")}>
          <h2>{user?.email}</h2>
          <div className={c("profile__plans")}>
            <h3>Planning</h3>
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
