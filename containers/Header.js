import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Divider, Drawer } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { API, URL_789BET } from "../contants";

const style = {
  display: "none",
};
export const Header = () => {
  const myRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const handlesScroll = () => {
      if (window.pageYOffset >= 186) {
        if (myRef?.current) {
          myRef.current.classList.add("sticky");
        }
      } else {
        if (myRef?.current) {
          myRef.current.classList.remove("sticky");
        }
      }
    };
    document.addEventListener("scroll", handlesScroll);
    return () => {
      document.removeEventListener("scroll", handlesScroll);
    };
  }, []);
  const listNav = [
    {
      label: "Trang chủ",
      href: "/",
      active: true,
    },
    {
      label: "Lịch thi đấu",
      href: "/lich-thi-dau",
    },
    {
      label: "Highlight",
      href: "/highlight",
    },
    // {
    //   label: 'Soi kèo',
    //   href: '/soi-keo',
    // },
    {
      label: "Tỷ lệ kèo",
      href: "/ty-le-keo",
    },
    // {
    //   label: 'Bxh',
    //   href: '/bxh',
    // },
    // {
    //   label: 'Kết quả',
    //   href: '/ket-qua',
    // },
    // {
    //   label: 'Cẩm nang',
    //   href: '/cam-nang',
    // },
    {
      label: "Livescore",
      href: "/livescore",
    },
    {
      label: "Tin Tức",
      href: "https://keovip.co/",
    },
    // {
    //   label: 'Tin tức',
    //   href: '/tin-tuc',
    // },
  ];

  const getButton = async () => {
    const response = await axios.get(`${API}/website/setting/button`);
    setButton(response?.data?.data ?? []);
  };

  useEffect(() => {
    getButton();
  }, []);

  const NavBar = (
    <nav
      id="navbar"
      style={{ display: "flex", alignItems: "center", marginLeft: 30 }}
    >
      <ul>
        {listNav?.map((item, index) => (
          <div key={index}>
            <Link href={item.href}>
              <li className={router.pathname === item.href ? "active" : ""}>
                {item?.label}
              </li>
            </Link>
            <Divider />
          </div>
        ))}
      </ul>
    </nav>
  );
  return (
    <header>
      {/* <MenuIcon fontSize="large" onClick={() => setIsOpen(true)} /> */}
      <Drawer
        PaperProps={{
          sx: { width: "40%" },
        }}
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {NavBar}
      </Drawer>
      <div className="nav-site">
        <div className="logo-mobile">
          <a
            className="site-brand"
            style={{ cursor: "pointer", display: "flex" }}
            href="/"
          >
            <Image
              src="/assets/images/logo-keovip.png"
              width={125}
              height={30}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a
            href={URL_789BET}
            target="_blank"
            rel="nofollow"
            className=" btn-odds"
          >
            CƯỢC 789BET UY TÍN 100%
          </a>
        </div>

        {/* <div className="float-top-ad" style={{ width: "414", height: "50", display: "none" }}>
          <img src="/assets/images/banner-bito2k.gif" width="400" height="75" alt="banner mobile 789bet" />
        </div> */}
        <div className="container">
          <a className="site-brand" style={{ cursor: "pointer" }} href="/">
            <Image
              src="/assets/images/logo-keovip.png"
              width={150}
              height={40}
            />
          </a>
          {NavBar}
        </div>
      </div>
      {/* <div className="second-nav-site">
        <div className="container">
          {button?.map((item, index) => (
            <Link key={index} href={item?.link ? item?.link : "#"}>
              <a target="_blank">
                <div
                  className="second-nav-site-item"
                  style={{
                    backgroundColor: `${item?.background}`,
                    color: `${item?.color}`,
                  }}
                >
                  {item?.name}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div> */}
      <div className="mobile-sticky-nav" ref={myRef}>
        <ul>
          <li>
            <Link href="/">
              <a>
                <img className="icon-home" src="/assets/images/home.webp" />
                <span> Trang chủ</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/highlight">
              <a>
                <img
                  className="icon-home"
                  src="/assets/images/highlight.webp"
                />
                <span> Highlight</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/livescore">
              <a>
                <img
                  className="icon-livescore"
                  src="/assets/images/ball.webp"
                />
                <span> Livescore</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ty-le-keo">
              <a>
                <img className="icon-home" src="/assets/images/tyle.webp" />
                <span> Tỷ lệ</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/lich-thi-dau">
              <a>
                <img
                  className="icon-home"
                  src="/assets/images/lichthidau.png"
                />
                <span> Lịch thi đấu</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
