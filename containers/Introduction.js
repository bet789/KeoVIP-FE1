import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "../utility/axios";
import { API } from "../contants";

export const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [introListData, setIntroListData] = useState([]);

  const getDataIntro = async () => {
    const response = await axios.get(`${API}/website/faq`);
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
                position: "absolute",
                bottom: "max-content",
                width: "100%",
                backgroundColor: "#141417",
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
                      {item?.name ?? ""}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: item?.content }} style={{ marginBottom: 10 }} />
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
