import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
const style = {
  position: "relative",
  top: "60%",
  left: "91%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
  color: "#000",
  "& > h6": {
    backgroundColor: "#b009b5",
    padding: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "#fff",
    fontWeight: "400",
    height: "120px",
  },
  "& > div": {
    color: "#000",
    backgroundColor: "#e5e5e5",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px 10px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 500,
    position: "relative",
    top: "-10%",
  },
  "& > button": {
    position: "absolute",
    backgroundColor: "#b009b5",
    borderRadius: "50px",
    color: "#fff",
    minWidth: "37px",
    bottom: "0",
    right: "0",
  },
  "& > button:hover": {
    backgroundColor: "gray",
  },
};
export const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <div className="contact-cskh">
            <a onClick={handleModal} style={{ cursor: "pointer" }}>
              <img src="https://csi.20icipp.com/img/static/789bet/desktop/cs-btn.png" alt="new88" />
            </a>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              className="modal-contact"
            >
              <Box sx={{ ...style, width: 320, height: 380 }} className="bxContact">
                <h6 id="child-modal-title">
                  Để được hỗ trợ nhanh nhất. Vui lòng chọn một trong các cách NHẮN TIN bên dưới để được hướng dẫn tham
                  gia Nhóm
                </h6>
                <div>
                  <a href="https://t.me/keovip1tv" target="_blank">
                    NHẮN TIN TELEGRAM
                  </a>
                </div>
                <div>
                  <a href="https://zalo.me/0783208888" target="_blank">
                    NHẮN TIN ZALO
                  </a>
                </div>
                <Button onClick={handleClose}>X</Button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <picture>
        <ul className="social-contact">
          <li className="list-item">
            <a href="https://t.me/keovip1tv" target="_blank">
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
          <li className="list-item">
            <a href="https://zalo.me/0783208888" target="_blank">
              <Image src="/assets/images/Logo-Zalo-Arc.webp" alt="" width={30} height={30} />
            </a>
          </li>
        </ul>
        <p className="reserved">Copyright © 2020 KEOVIP.TV All rights reserved</p>
      </picture>
    </footer>
  );
};
