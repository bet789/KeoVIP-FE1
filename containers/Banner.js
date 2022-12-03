import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ip } from '../data/ip';

export const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const bannerHome = (banner.find((d) => d.key === 'banner-home') || [])?.banner || [];

  const fetchData = async () => {
    const response = await axios.get(`${ip}/website/setting/banner`);
    const data = response.data.data || [];
    if (data) {
      setBanner(data);
    }
  };

  return (
    <>
      <div className="row">
        {bannerHome.map((data, idx) => (
          <div
            key={idx}
            className="col-xl-6 banner-row"
            onClick={() => data.url && window.open(data.url || '#')}
          >
            <Image
              src={data.img || ''}
              className="banner-home"
              alt="banner"
              width="90%"
              height="100%"
              layout="fill"
            />
          </div>
        ))}
      </div>
    </>
  );
};
