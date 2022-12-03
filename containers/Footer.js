import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 logo-footer">
            <img src="/assets/images/logo-keovip.png" width={384} height={65} alt="logo" />
          </div>
          <div className="col-md-4">
            <ul className="footer-list">
              <li className="list-item">
                <a href="">Về chúng tôi</a>
              </li>
              <li className="list-item">
                <a href="">Chính sách bảo mật</a>
              </li>
              <li className="list-item">
                <a href="">Điều khoản</a>
              </li>
              <li className="list-item">
                <a href="">Câu hỏi thường gặp</a>
              </li>
              <li className="list-item">
                <a href="">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="info mb-0">Email: ads.keoVIP@gmail.com</p>
            <p className="info mb-0">Đia chỉ: 54 Đường 3B, Phong Phú, Bình Chánh, Hồ Chí Minh.</p>
            <p className="info">Chịu trách nhiệm: Ông. Hứa Huy Lợi</p>
            <p className="info">Thời gian hoạt động: 24h từ Thứ 2 - Chủ Nhật (Bao gồm cả ngày nghỉ lễ)</p>
          </div>
        </div>
      </div>
      <picture>
        {/* <img src={Logo} alt="" /> */}

        <ul className="social-contact">
          <li className="list-item">
            <a href="">
              <Image src="/assets/images/icon-message.svg" alt="" width={30} height={30} />
            </a>
          </li>
          <li className="list-item">
            <a href="">
              <Image src="/assets/images/icon-facebook.svg" alt="" width={30} height={30} />
            </a>
          </li>
          <li className="list-item">
            <a href="">
              <Image src="/assets/images/icon-twitter.svg" alt="" width={30} height={30} />
            </a>
          </li>
          <li className="list-item">
            <a href="">
              <Image src="/assets/images/icon-instagram.svg" alt="" width={30} height={30} />
            </a>
          </li>
        </ul>
        <p className="reserved">Copyright © 2020 KEOVIP.TV All rights reserved</p>
      </picture>
    </footer>
  );
};
