import Head from "next/head";

const Schema = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "keovip.tv",
            "alternateName": "keovip",
            "url": "https://keovip.tv",
            "logo": "https://keovip.tv/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=384&q=75"
          }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "keovip.tv",
            "image": "https://keovip.tv/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=384&q=75",
            "@id": "https://keovip.tv",
            "url": "https://keovip.tv",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": ""
            }  
          }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "keovip",
              "url": "https://keovip.tv",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://keovip.tv/search?={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "keovip",
              "url": "https://keovip.tv",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://keovip.tv/search?={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"http://schema.org/",
                "@graph":[{"@context":"http://schema.org/","@type":"SiteNavigationElement",
                "id":"site-navigation","name":"Lịch Thi Đấu",
                "url":"https://keovip.tv/lich-thi-dau"},
                {"@context":"http://schema.org/",
                "id":"site-navigation",
                "name":"Highlight",
                "url":"https://keovip.tv/highlight"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Soi Kèo",
                "url":"https://keovip.tv/soi-keo"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Tỷ Lệ Kèo",
                "url":"https://keovip.tv/ty-le-keo"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"BXH",
                "url":"https://keovip.tv/bxh"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Kết Quả",
                "url":"https://keovip.tv/ket-qua"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Cẩm Nang",
                "url":"https://keovip.tv/cam-nang"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Livescore",
                "url":"https://keovip.tv/livescore"},
                {"@context":"https://schema.org","@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"Tin Tức",
                "url":"https://keovip.tv/tin-tuc"},
                {"@context":"http://schema.org/",
                "@type":"SiteNavigationElement",
                "id":"site-navigation",
                "name":"KeoVip",
                "url":"https://keovip.tv"}]}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "KeoVip",
              "url": "https://keovip.tv/",
              "image": ""  
            }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "keovip.tv là gì?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kepvip.com là trang web phát sóng trực tiếp bóng đá miễn phí với chất lượng cao và là kênh xem bóng đá trực tuyến được yêu thích nhất Việt Nam. Nơi mà tất cả các giải đấu bóng đá hàng đầu trong cho đến ngoài nước đều được trực tiếp đầy đủ. Giúp bạn xem được trận đấu mình thích với trải nghiệm cao nhất. Chính vì thế, nếu có nhu cầu xem bất kỳ trận đấu nào, bạn hãy truy cập vào đây để lấy được link xem bóng đá uy tín nhất nhé."
                }
              },{
                "@type": "Question",
                "name": "Mục tiêu phát triển của trang web trực tiếp bóng đá keovip.tv",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mục tiêu phát triển của chúng tôi là “luôn đặt trải nghiệm của người dùng lên hàng đầu”. Nên chỉ cần vào đây, bạn sẽ được lấy đường link xem bóng đá trực tiếp của trận đấu mình thích khá nhanh chóng. Bởi chúng tôi đang có hệ thống link xem trực tiếp bóng đá ở toàn bộ các giải đấu như Champion League, Ngoại Hạng Anh, Serie A, La Liga, Ligue 1, Cúp C2, Bundesliga, Euro, World Cup, Copa America,… Đương nhiên với những đường link được Keovip TV cung cấp bạn sẽ xem được trận đấu bóng đá với chất lượng hình ảnh có độ phân giải cao, âm thanh chân thực, đường truyền ổn định, bình luận bằng tiếng Việt hấp dẫn, kích thước màn hình đúng chuẩn,."
                }
              },{
                "@type": "Question",
                "name": "Xem bóng đá trực tuyến keovip.tv có gì nổi bật?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Khi truy cập vào trang web phát sóng bóng đá trực tiếp Keovip, bạn sẽ khá là bất ngờ. Bởi chúng tôi không chỉ cập nhật link trực tiếp bóng đá cho toàn bộ các giải đấu lớn như Ngoại Hạng Anh, Champion League, La Liga, Serie A, Bundesliga, Ligue 1, World Cup, Euro, Copa America,.. mà còn cập nhật link xem các giải bóng đá trong nước và trong khu vực như V-League, Sea Games, AFF Cup, U23 Châu Á,.. Thêm vào đó, những thông tin bóng đá trong và ngoài được cũng được cập nhật đầy đủ mỗi ngày cho bạn tham khảo."
                }
              },{
                "@type": "Question",
                "name": "Phát sóng tất cả giải đấu hot nhất trên thế giới",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hiện tại đa số mọi người đều muốn xem các trận đấu của những CLB hàng đầu như Real Madird, Man City, Liverpool, Man United, Barca, Bayern Munich, Juventus,.. Biết được điều này, chúng tôi cũng cập nhật link xem các CLB này khá là đầy đủ và chất lượng. Thêm vào đó, các trận đấu của những đội bóng lớn như Pháp, Anh, Bồ Đào Nha, Đức, Tây Ban Nha, Brazil, Agentina, Bỉ,.. cũng được keovip.tv cập nhật link đầy đủ. Giúp bạn xem bất kỳ trận bóng đá nào mình thích hết sức dễ dàng tại đây."
                }
              },{
                "@type": "Question",
                "name": "Hệ thống link tructiepbongda ngon nhất",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "keovip.tv cũng cung cấp link trực tiếp bóng đá 2022 mới nhất với chất lượng cực kỳ cao. Bởi chúng tôi đang áp dụng những công nghệ mới nhất cũng như hệ thống server khá hiện đại. Chính vì thế sẽ mang đến cho bạn các trận đấu bóng đá đỉnh cao với hình ảnh cực sắc nét, âm thanh thì chân thực, tốc độ luôn mượt mà, ổn định, kích thước màn hình thì đúng chuẩn, các hiện tượng như giật, đứng hình, lag,.. gần như không xuất hiện. Thêm vào đó, bạn còn được nghe bình luận tiếng Việt cực hấp dẫn từ các BLV hàng đầu trong nước hiện nay."
                }
              },{
                "@type": "Question",
                "name": "Trang tổng hợp đầy đủ thông tin về bóng đá",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bạn sẽ biết được các tin tức bóng đá mới nhất trong nước cũng như quốc tế. Tin tức cũng khá đa dạng, từ tin về giải đấu, cầu thủ, trước trận đấu, huấn luyện viên, chuyển nhượng, bên lề sân cỏ… Thêm vào đó thời gian cập nhật lúc nào cũng sớm nhất, giúp bạn nắm được tình hình bóng đá trong tay mình khá dễ dàng
            Bạn sẽ biết được kqbd hôm nay của toàn bộ các trận đấu vừa mới diễn ra nhanh nhất, từ tỷ số, số phạt góc, ném biên, thẻ phạt, cầu thủ kiến tạo, ghi bàn,…
            Bạn còn được xem lại video highlight của trận đấu mà mình không thể xem trực tiếp tại keovip.tv khá đơn giản. Bởi chúng tôi cập nhập video bóng đá highlight cho toàn bộ các giải bóng đá lớn với chất lượng khá cao.
            Bạn sẽ biết được lịch thi đấu của các giải bóng đá hàng đầu trên thế giới hiện nay khá chi tiết. Khi chúng tôi cập nhật đầy đủ các thông tin như thời gian trận đấu bắt đầu, đội hình dự kiến ra sân, sân tổ chức trận đấu,…
            Bạn sẽ nắm được bảng xếp hạng ở bất kỳ trận đấu nào mình thích khi truy cập vào đây. Trong BXH sẽ có toàn bộ thông tin quan trọng như vị trí, điểm số, số vòng thi đấu, hiệu số thắng thua, thành tích trong các trận đấu gần nhất
            Bạn còn được tham khảo bảng kèo nhà cái ở bất kỳ trận đấu nào diễn ra trong ngày khá đơn giản. Trong bảng kèo, keovip.tv cập nhật toàn bộ các thể loại kèo, thêm vào đó tỷ lệ kèo và tỷ lệ ăn tiền cũng chuẩn xác 100%. Để giúp bạn có được những tin soi kèo với tỷ lệ thắng cao nhất từ đội ngũ chuyên gia đang làm việc tại Keovip.
            Bạn cũng được sử dụng Livescore miễn phí, để giúp mình có thể xem tỷ số trực tiếp ngay khi trận đấu đang diễn ra nhanh và chuẩn xác nhất."
                }
              },{
                "@type": "Question",
                "name": "Giao diện thông minh gần gũi người dùng",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "keovip.tv còn dành rất nhiều thời gian và công sức để nghiên cứu và xây dựng website, chính vì thế khi vào keovip.tv, bạn sẽ thấy bố cục trang web được thiết kế khá khoa học khi phân theo từng mục khác nhau. Mỗi mục sẽ là một chức năng riêng cho mọi người dễ dàng tìm kiếm và sử dụng. Thêm vào đó, chúng tôi còn lựa chọn màu sắc khá hài hòa cũng như tô điểm các chức năng quan trọng. Cho bạn có thể sử dụng một cách tốt nhất và không bao giờ bị mỏi mắt nếu nhìn quá lâu. Đặc biệt, keovip.tv Trực Tiếp Bóng Đá còn đang sử dụng đường truyền hiện đại, cho nên tốc độ load khá nhanh. Cho bạn được những trải nghiệm sử dụng không thể chê vào đâu được."
                }
              }]
            }`,
        }}
      />
    </Head>
  );
};
export default Schema;
