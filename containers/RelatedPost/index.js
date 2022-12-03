import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const RelatedPost = ({ data, keyAvatar, keyTitle, keyUrl, keyId }) => {
  return (
    <div className="container-fluid">
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontSize: 20, borderBottom: '2px solid #01B243', display: 'inline' }}>
          Bài viết liên quan
        </p>
        <Link href={`/${keyUrl}`}>
          <a>Xem thêm</a>
        </Link>
      </div>
      {data?.map((item, index) => (
        <Link key={index} href={`/${keyUrl}/${item?.slug ?? ''}-${item[keyId]}`}>
          <a>
            <div key={index} className="container" style={{ marginTop: 10 }}>
              <div className="row">
                <div
                  className="col-4"
                  style={{
                    background: `url("${item[keyAvatar]}") center center / contain no-repeat`,
                    // backgroundSize: 'contain',
                    width: '100%',
                    height: 80,
                  }}
                ></div>
                <div className="col-8">{item[keyTitle]}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPost;
