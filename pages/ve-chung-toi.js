import React from 'react'
import Headhtml from '../containers/Headhtml'
import Script from '../containers/Script'
import {Footer} from '../containers/Footer'
import {Header} from '../containers/Header'
import {Introduction} from '../containers/Introduction'
import styles from '../styles/Home.module.css'

const AboutUspage = () => {
  return (
    <div className={styles.container}>
      <Headhtml />
      <main className={styles.main}>
        <Header />
        <div id="about-us-page">
          <div className="container">
            <h3 className="page-title mb-4 mt-4">
              Về Chúng Tôi - Kèo VIP website phát trực tiếp bóng đá số 1 hiện nay
            </h3>
            <div className="row mb-4">
              <div className="col-12 col-lg-8">
                <div className="content">
                  <h2 className="highlight">Giới thiệu về trang web Kèo VIP</h2>
                  <p>
                    <b>Kèo VIP</b> hiện tại chính là website{' '}
                    <b className="highlight">trực tiếp bóng đá ngon</b> nhất với chất lượng cao hàng
                    đầu trong nước. Thêm vào đó, khi truy cập vào đây bạn còn có thể xem được rất
                    nhiều những thông tin liên quan đến bóng đá như tin tức, bảng xếp hạng, lịch thi
                    đấu, kết quả, bảng kèo nhà cái, video highlight,… Đặc biệt, Kèo VIP hoạt động
                    dưới hình thức phi lợi nhuận nhưng toàn bộ các dịch vụ cung cấp đến người dùng
                    đều có chất lượng cao.
                  </p>
                  <p>
                    Khi đồng hành cùng với Kèo VIP, bạn có thể truy cập vào những đường link xem
                    bóng đá trực tiếp chất lượng nhất ở toàn bộ các giải đấu hàng đầu thế giới hiện
                    nay. Để giúp bạn thưởng thức được bất kỳ trận đấu bóng đá nào mình thích với
                    chất lượng cao nhất. Chính vì thế, Kèo VIP chính là địa chỉ mà bạn không
                    được bỏ qua, khi muốn xem bóng đá hay là các thông tin liên quan đến môn thể
                    thao vua.
                  </p>
                  <picture>
                    <img
                      className="w-100"
                      src="https://cdn.xoilac7.net/2022/05/ve-chung-toi-xoilac-tv-website-phat-truc-tiep-bong-da-hang-dau-khu-vuc.jpg"
                      alt=""
                    />
                  </picture>
                  <figcaption>
                    Về Chúng Tôi – Kèo VIP website phát trực tiếp bóng đá hàng đầu khu vực
                  </figcaption>
                  <p>
                    Khi xây dựng Kèo VIP thì chúng tôi muốn tất cả mọi người đều có thể sử dụng
                    được trang web một cách dễ dàng. Cho nên giao diện website được thiết kế cực kỳ
                    khoa học và đẹp mắt. Thêm vào đó, Kèo VIP còn áp dụng những công nghệ P2P
                    hàng đầu. Để cung cấp cho bạn những đường link xem bóng đá với chất lượng cao,
                    giúp bạn thưởng thức được trận đấu mình thích với hình ảnh sắc nét, âm thanh
                    sống động và tốc độ mượt mà. Đương nhiên <b>Kèo VIP</b> cũng tương thích với
                    toàn bộ các nền tảng công nghệ và thiết bị, cho nên bạn có thể truy cập vào đây
                    bằng cả điện thoại, máy tính hay laptop đều được.
                  </p>
                  <p>
                    Hiện tại đội ngũ nhân viên của Xoi Lac TV vẫn đang nỗ lực hết mình để xây dựng
                    website trở nên chất lượng hơn. Để biến Kèo VIP trở thành website bóng đá
                    online số 1, giúp bạn xem bất kỳ thông tin về bóng đá nào nhanh và đầy đủ. Cũng
                    như có thể xem các trận bóng đá mình thích tại đây với trải nghiệm cao nhất.
                  </p>
                  <h2 className="highlight">Về trực tiếp bóng đá</h2>
                  <p>
                    Mỗi ngày, Kèo VIP luôn cung cấp cho bạn tất cả các đường link xem bóng đá
                    của các trận đấu diễn ra trong ngày. Chúng tôi cũng xây dựng hệ thống link cực
                    kỳ chất lượng, giúp bạn tìm được đường link xem trận đấu mình thích nhanh nhất.
                    Chất lượng trong link cũng cực kỳ cao, khi từ hình ảnh, âm thanh, tốc độ load
                    trận đấu,.. đều tốt. Đặc biệt, bình luận trong trận đấu cũng là các BLV hàng đầu
                    Việt Nam.
                  </p>
                  <p>
                    Ngoài xem được những giải bóng đá hàng đầu, Kèo VIP còn cập nhật cả link xem
                    trực tiếp bóng đá hôm nay, ngày mai ở những kênh hàng đầu như VTV3 HD, VTC3,
                    VTV6, K+PM, K+ HD, VTV3, K+, K+1, K+PC, Fox Sports, BTV5, SCTV15, Tin nóng bóng
                    đá TV (BDTV), Thể Thao TV (TTTV) hoàn toàn miễn phí.
                  </p>
                  <h2 className="highlight">Về video highlight</h2>
                  <p>
                    Tại Kèo VIP bạn sẽ được xem lại <b className="highlight">video highlight</b>{' '}
                    của bất kỳ trận đấu nào vừa mới diễn ra khá dễ dàng. Bởi Kèo VIP có hệ thống
                    cập nhật video bóng đá highlight cho toàn bộ các giải đấu hàng đầu hiện nay như
                    Serie A, La Liga, Ngoại Hạng Anh, Champion League, Ligue 1,… cho đến các giải
                    đấu trong nước và trong khu vực.
                  </p>
                  <p>
                    Video highlight cũng được <b>Kèo VIP</b> cập nhật ngay khi trận đấu vừa mới
                    kết thúc. Thêm vào đó trong video cũng bao gồm toàn bộ các tính huống dẫn đến
                    bàn thắng, tình huống hấp dẫn,.. Cho bạn biết được các diễn biến chính của trận
                    đấu. Chất lượng trong video cũng khá cao, khi bạn sẽ cảm nhận được hình ảnh sắc
                    nét, âm thanh sống động và tốc độ mượt mà.
                  </p>
                  <h2 className="highlight">Về bảng xếp hạng</h2>
                  <p>
                    Kèo VIP cũng đang cập nhật bảng xếp hạng cho toàn bộ các giải đấu bóng đá được
                    yêu thích nhất hiện nay như UEFA Champions League, Europa League, Ngoại hạng
                    Anh, Laliga, Bundesliga, Serie A, Ligue 1, V-League,…
                  </p>
                  <p>
                    Trong bảng xếp hạng, bạn sẽ biết được số vòng thi đấu, vị trí trên{' '}
                    <b className="highlight">BXH</b>, điểm số, hiệu số bàn thắng/ thua, thành tích
                    trong 5 trận gần nhất,… Thông tin trong bảng xếp hạng cũng được chúng tôi cập
                    nhật tự động dựa vào kết quả trận đấu gần nhất, cho nên cực kỳ chuẩn xác.
                  </p>
                  <h2 className="highlight">Về tỷ lệ kèo</h2>
                  <p>
                    Kèo VIP cũng là một địa chỉ mà bạn không được bỏ qua, nếu đang muốn soi kèo
                    nhà cái cho bất kỳ trận đấu nào. Bởi hằng ngày, chúng tôi đều cập nhật bảng kèo
                    cho toàn bộ các trận đấu diễn ra trong ngày khá là sớm.
                  </p>
                  <p>
                    Trong bảng kèo tại Kèo VIP, bạn sẽ được biết toàn bộ các thể loại kèo, từ
                    kèo chính cho đến kèo phụ. Chúng tôi còn có chức năng cập nhật tỷ lệ tự động,
                    nên <b className="highlight">tỷ lệ kèo</b> và tỷ lệ ăn tiền trong trận đấu cực
                    kỳ chuẩn xác.
                  </p>
                  <p>
                    Thêm nữa, bảng kèo còn được Kèo VIP thiết kế cực kỳ đơn giản, giúp bạn có thể
                    đọc được kèo nhanh nhất.
                  </p>
                  <h2 className="highlight">Về lịch thi đấu</h2>
                  <p>
                    Để biết chính xác hôm nay, ngày mai diễn ra các trận đấu bóng đá nào bạn hãy hãy
                    truy cập vào Kèo VIP. Bởi chúng tôi đang{' '}
                    <b className="highlight">cập nhật lịch thi đấu</b> cho toàn bộ các giải bóng đá
                    hàng đầu trên thế giới cũng như trong nước.
                  </p>
                  <p>
                    Khi xem lịch tại đây, bạn sẽ nắm được các đội bóng đối đầu với nhau là ai, thời
                    gian thi đấu như thế nào, đội hình ra sân, sân tổ chức trận đấu,…
                  </p>
                  <h2 className="highlight">Về tin tức bóng đá</h2>
                  <p>
                    Kèo VIP hiện tại cũng cập nhật toàn bộ các{' '}
                    <b className="highlight">tin tức</b> bóng đá mới nhất mỗi ngày. Cho bạn có thể
                    nắm được tình hình bóng đá như thế nào một cách đầy đủ. Các thông tin bóng đá
                    được Kèo VIP chia sẻ là:
                  </p>
                  <ul>
                    <li>Tin bóng đá Việt Nam</li>
                    <li>Tin bóng đá quốc tế</li>
                    <li>Tin về chuyển nhượng</li>
                    <li>Tin trước trận đấu, cầu thủ, huấn luyện viên</li>
                    <li>Tin tức bên lề sân cỏ,…</li>
                  </ul>
                  <p>
                    Hiện tại <b>Kèo VIP</b> vẫn đang cố gắng để phát triển hơn nữa. Thêm vào đó
                    luôn luôn lắng nghe ý kiến của đọc giả để xây dựng website trở nên tốt hơn. Cho
                    nên có thắc mắc hay vấn đề gì hãy liên hệ với chúng tôi ngay lập tức.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Introduction />
        <Footer />
      </main>
      <Script />
    </div>
  );
}

export default AboutUspage