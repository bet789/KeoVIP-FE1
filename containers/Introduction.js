import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import axios from '../utility/axios';
import { ip } from '../data/ip';
import { useRouter } from 'next/router';

export const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // const introListData = [
  //   {
  //     label: "Xôi Lạc TV là gì?",
  //     href: "xoi_lac_la_gi ",
  //   },
  //   {
  //     label: "Mục tiêu phát triển của trang web trực tiếp bóng đá Xoilac7.net",
  //     href: "muc_tieu_phat_trien ",
  //   },
  //   {
  //     label: "Xem bóng đá trực tuyến Xoilac7.net có gì nổi bật?",
  //     href: "co_gi_noi_bat",
  //   },
  //   {
  //     label: "Phát sóng tất cả giải đấu hot nhất trên thế giới",
  //     href: "phat_song_tat_ca_giai_dau",
  //   },
  //   {
  //     label: "Hệ thống link tructiepbongda ngon nhất",
  //     href: "he_thong_link_truc_tiep_ngon_nhat",
  //   },
  //   {
  //     label: "Trang tổng hợp đầy đủ thông tin về bóng đá",
  //     href: "day_du_thong_tin_bong_da",
  //   },
  //   {
  //     label: "Giao diện thông minh gần gũi người dùng",
  //     href: "giao_dien_thong_minh",
  //   },
  //   {
  //     label:
  //       "Những giải bóng đá đang được phát sóng trực tiếp trên Xoilac7.net",
  //     href: "giai_dang_phat_truc_tiep",
  //   },
  //   {
  //     label: "Hướng dẫn cách xem trực tiếp bóng đá tại Xoilac TV",
  //     href: "huong_dan_xem_truc_tiep",
  //   },
  //   {
  //     label: "Tại sao bạn nên lựa chọn Xoilac TV để xem trực tiếp bóng đá?",
  //     href: "tai_sao_chon_xoi_lac",
  //   },
  //   {
  //     label:
  //       "Tổng hợp một số trang web xem trực tiếp bóng đá hàng đầu hiện nay",
  //     href: "tong_hop_web_xem_bong_da_hang_dau",
  //   },
  //   {
  //     label: "Một số lưu ý khi xem bóng đá trực tuyến tại Xoilac TV",
  //     href: "mot_so_luu_y",
  //   },
  //   {
  //     label: "Kết luận",
  //     href: "ket_luan ",
  //   },
  //   {
  //     label: "Thông tin liên hệ với Xoilac TV",
  //     href: "thong_tin_lien_he",
  //   },
  // ];

  const [introListData, setIntroListData] = useState([]);

  const getDataIntro = async () => {
    const response = await axios.get(`${ip}/website/faq`);
    setIntroListData(response?.data?.data ?? []);
  };

  useEffect(() => {
    getDataIntro();
  }, []);
  const introList = (
    <ul className="intro-list">
      {introListData.map((item) => (
        <li
          className="intro-item active"
          key={item?._id}
          onClick={() => {
            router.push(`${location.pathname}#${item?._id}`);
            setIsOpen(false);
          }}
        >
          <span>{item?.name}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-between">
            <div className="title-sub-section">
              <span>Lời</span>
              <span>Giới thiệu</span>
            </div>
            <div className="d-md-block d-lg-none d-xl-none">
              <MenuIcon fontSize="large" onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
        <div className="row mb-3 introduction">
          {isOpen && (
            <div
              className="introduction-small"
              style={{
                position: 'absolute',
                bottom: 'max-content',
                width: '100%',
                backgroundColor: '#141417',
                zIndex: 10,
              }}
            >
              {introList}
            </div>
          )}
          <div className="d-none d-lg-block col-lg-4">{introList}</div>
          <div className="col-12 col-lg-8">
            <div className="content-container">
              <div className="content">
                {introListData?.map((item) => (
                  <>
                    <p className="intro-title" id={item?._id}>
                      {item?.name ?? ''}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                      style={{ marginBottom: 10 }}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
