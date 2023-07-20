import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Guest.module.scss";
import Story from "~/components/Story";
import Signup from "~/components/Signup";
import Footer from "~/components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "~/features/userSlice";

const c = classNames.bind(styles);

export default function Guest() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [user, navigate]);
  const video = [
    {
      title: "Thưởng thức trên TV của bạn",
      desc: "Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.",
      imgURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      videoURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
      fit: true,
    },
    {
      title: "Xem ở mọi nơi",
      desc: "Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.",
      imgURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png",
      videoURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v",
      fit: false,
    },
  ];
  const image = [
    {
      title: "Tải xuống nội dung để xem ngoại tuyến",
      desc: "Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.",
      imgURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      posterURL:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
    },
    {
      title: "Tạo hồ sơ cho trẻ em",
      desc: "Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.",
      imgURL:
        "https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZSTDsJQCe6ndkevSo7c_grcr0f2YJ5pimzeSor98ix4Earwyoza7Liyg8OsNpA2cg3HKSF63qppfkKVP8BTEmcVRAkwa2lhcl5S.png?r=d73",
    },
  ];
  return (
    <div className="content">
      <div className={c("background")}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/7835f71f-c803-4c1f-a39b-39d00cd2a080/VN-vi-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className={c("blur")}></div>
        <div className={c("title")}>
          <h1>
            Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
          </h1>
          <h4>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h4>
          <p>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </p>
          <Signup onlyForm />
        </div>
      </div>
      <Story video={video[0]}></Story>
      <Story image={image[0]}></Story>
      <Story video={video[1]}></Story>
      <Story image={image[1]}></Story>
      <Signup withContact />
      <Footer SignUp />
    </div>
  );
}
