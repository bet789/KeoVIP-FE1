import React, { useEffect, useState } from "react";
import axios from "../utility/axios";
import { MatchCard } from "../containers/MatchCard";
import SkListMatch from "./Skeleton/SkListMatch";
import SkListMenu from "./Skeleton/SkListMenu";
import { API } from "../contants";
export default function HotLive(props) {
  const [dataMenu, setDataMenu] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [limit, setLimit] = useState(12);
  const [urlMatches, setUrlMatches] = useState("/website/matches");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMenu, setLoadingMenu] = useState(true);
  const fetchDataMenu = async () => {
    const response = await axios.get(`${API}/website/matches/menu`);
    const data = response.data.data || [];
    if (data) {
      setDataMenu([
        {
          key: "all",
          title: "Tất cả",
          count: data.all,
          url: "/website/matches",
        },
        {
          key: "hot",
          title: "Trận hot",
          count: data.hot,
          url: "/website/matches?type=hot",
        },
        {
          key: "blv",
          title: "BLV kèo vip",
          count: data.blv,
          url: "/website/matches?type=blv",
        },
        {
          key: "doing",
          title: "Đang đá",
          count: data.doing,
          url: "/website/matches?type=doing",
        },
        {
          key: "today",
          title: "Hôm nay",
          count: data.today,
          url: "/website/matches?type=home",
        },
        {
          key: "tomorrow",
          title: "Ngày mai",
          count: data.tomorrow,
          url: "/website/matches?type=tomoro",
        },
      ]);
    }
    setLoadingMenu(false);
  };
  useEffect(() => {
    fetchDataMenu();
  }, []);
  const getDataMatchList = async () => {
    const response = await axios.get(`${API}${urlMatches}`);
    setCategories(response?.data?.data?.categories ?? []);
    setMatchList(response?.data?.data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getDataMatchList();
  }, [urlMatches]);

  return (
    <>
      {loadingMenu ? (
        <SkListMenu />
      ) : (
        dataMenu &&
        dataMenu.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <div className="match-time-selector">
                <ul>
                  <span>
                    <img src="/assets/images/Group-4.png" />
                  </span>
                  {(dataMenu || []).map((d) => (
                    <li key={d.key} onClick={() => setUrlMatches(d.url)}>
                      <span className={urlMatches === d.url ? "active-title" : ""}>{d.title}</span>
                      {Boolean(d.count) && <span className="match-time-selector-count">{d.count}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
      <div className="row ">
        {loading ? (
          <SkListMatch />
        ) : (
          matchList &&
          matchList.length > 0 &&
          matchList
            .filter((item, index) => page <= index + 1 && index + 1 <= page + limit - 1)
            .map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
                  <MatchCard data={item} />
                </div>
              );
            })
        )}
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <button className="w-100 load-more" onClick={() => setLimit(limit + 12)}>
            Xem thêm lịch trực tiếp
          </button>
        </div>
      </div>
    </>
  );
}
