import { Footer } from '../../containers/Footer';
import Head from '../../containers/Headhtml';
import { Header } from '../../containers/Header';
import { Introduction } from '../../containers/Introduction';
import Script from '../../containers/Script';
import styles from '../../styles/Home.module.css';
import { ip } from '../../data/ip';
import axios from 'axios';
import Link from 'next/link';
import { Banner } from '../../containers/Banner';

export async function getServerSideProps() {
  const response = await axios.get(`${ip}/website/ranks`);
  return { props: { data: response?.data?.data ?? [] } };
}

const Index = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <Header />
        <div id="rank-table-page">
          <div className="container">
            <div className="banner">
              <Banner />
            </div>
            <h3 className="page-title mt-4">
              DỮ LIỆU BẢNG XẾP HẠNG BÓNG ĐÁ HÔM NAY
              <strong> (MÙA GIẢI: 2022/2023)</strong>
            </h3>
            {/* <div className="select-place-league">
              <ul>
                <li>
                  <a href="">Anh</a>
                </li>
                <li>
                  <a href="">TBN</a>
                </li>
                <li>
                  <a href="">Đức</a>
                </li>
                <li>
                  <a href="">Ý</a>
                </li>
                <li>
                  <a href="">Pháp</a>
                </li>
                <li>
                  <a href="">C1</a>
                </li>
                <li>
                  <a href="">C2</a>
                </li>
                <li>
                  <a href="">C3</a>
                </li>
                <li>
                  <a href="">BĐN</a>
                </li>
                <li>
                  <a href="">V League</a>
                </li>
                <li>
                  <a href="">Hà Lan</a>
                </li>
                <li>
                  <a href="">MLS</a>
                </li>
                <li>
                  <a href="">Ảgentina</a>
                </li>
                <li>
                  <a href="">Brazil</a>
                </li>
                <li>
                  <a href="">Mexico</a>
                </li>
                <li>
                  <a href="">Úc</a>
                </li>
                <li>
                  <a href="">Nhật</a>
                </li>
                <li>
                  <a href="">Hàn</a>
                </li>
                <li>
                  <a href="">China</a>
                </li>
                <li>
                  <a href="">Nga</a>
                </li>
                <li>
                  <a href="">AFC</a>
                </li>
                <li>
                  <a href="">U23 AFC</a>
                </li>
                <li>
                  <a href="">AFC Asian Cup</a>
                </li>
                <li>
                  <a href="">Nations</a>
                </li>
              </ul>
            </div> */}
            <div className="row">
              <div className="col-12">
                <div className="rank-table-container">
                  {data?.map((item, index) => {
                    return (
                      <>
                        <div className="rank-table-header">
                          <p>{item?.name}</p>
                          <Link href={`/bxh/${item.id}`}>
                            <a>Xem tất cả</a>
                          </Link>
                        </div>
                        <div className="table-container">
                          <table key={index} style={{ marginBottom: 20 }}>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Đội bóng</th>
                                <th>Số trận</th>
                                <th>Thắng</th>
                                <th>Hòa</th>
                                <th>Thua</th>
                                <th>Hiệu số</th>
                                <th>Điểm</th>
                                <th>Trận gần nhất</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item?.data
                                ?.filter((_, ind) => ind <= 5)
                                ?.map((e, ind) => (
                                  <tr key={ind}>
                                    <td>{e?.rank}</td>
                                    <td style={{ width: '20%' }}>
                                      <picture>
                                        <img
                                          src={
                                            e?.logo ??
                                            'https://cdn.sportmonks.com/images/soccer/team_placeholder.png'
                                          }
                                          alt={e?.name ?? ''}
                                        />
                                      </picture>
                                      <span>{e?.name ?? ''}</span>
                                    </td>
                                    <td>{e?.played ?? 0}</td>
                                    <td>{e?.win ?? 0}</td>
                                    <td>{e?.draw ?? 0}</td>
                                    <td>{e?.lose ?? 0}</td>
                                    <td>{(e?.goals?.for ?? 0) - (e?.goals?.against ?? 0)}</td>
                                    <td>{e?.point ?? 0}</td>
                                    <td>
                                      <div className="lose"></div>
                                      <div className="win"></div>
                                      <div className="dickens"></div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="intro">
              Đối với những người hâm mộ bóng đá thì việc xem bảng xếp hạng khá là quan trọng. Bởi
              ai cũng muốn biết đội bóng mình thích co thành tích như thế nào, kết quả gần đây ra
              sao, có cạnh tranh được chức vô địch hay không,.. Chính vì thế, <b>Kèo VIP</b> đã cho
              ra mục Bảng Xếp Hạng, nơi mà bạn có thể tìm và xem bất kỳ giải đấu nào mình thích
              nhanh và đầy đủ thông tin nhất.
            </p>
          </div>
        </div>
        <Introduction />
        <Footer />
      </main>

      <Script />
    </div>
  );
};

export default Index;
