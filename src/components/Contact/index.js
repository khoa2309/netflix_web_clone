import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import Question from "./Question";
import { useEffect, useState } from "react";
const c = classNames.bind(styles);
const questions = [
  {
    question: "Netflix là gì?",
    answer: (
      <p>
        Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương
        trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều
        nội dung khác trên hàng nghìn thiết bị có kết nối Internet.
        <br></br>
        <br></br>
        Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp
        phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng.
        Luôn có những nội dung mới để bạn khám phá và những chương trình truyền
        hình, phim mới được bổ sung mỗi tuần!
      </p>
    ),
  },
  {
    question: "Tôi phải trả bao nhiêu tiền để xem Netflix?",
    answer:
      "Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.",
  },
  {
    question: "Tôi có thể xem ở đâu?",
    answer:
      "Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.",
  },
  {
    question: "Làm thế nào để hủy?",
    answer:
      "Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.",
  },
  {
    question: "Tôi có thể xem gì trên Netflix?",
    answer:
      "Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.",
  },
  {
    question: "Netflix có phù hợp cho trẻ em không?",
    answer:
      "Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng. Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy.",
  },
];
function Contact() {
  return (
    <div className={c("wrapper")}>
      <h1>Câu hỏi thường gặp</h1>

      {questions.map((question, index) => (
        <Question key={index} data={question}></Question>
      ))}

      <p>
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
        thành viên của bạn.
      </p>
    </div>
  );
}

export default Contact;
