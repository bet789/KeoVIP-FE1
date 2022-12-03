import { getServerSideSitemap } from "next-sitemap";
import axios from "../../utility/axios";
import { ip } from "../../data/ip";

export const getServerSideProps = async (ctx) => {
  const response = await axios.get(`${ip}/website/news`, {
    params: {
      limit: 1000,
      page: 0,
    },
  });

  const fields = (response?.data?.data?.data ?? []).map(function (data) {
    return {
      loc: `https://keovip.tv/tin-tuc/${data.slug}-${data._id}`,
      lastmod: data.createdAt || new Date().toISOString(),
      priority: 0.7,
      changefreq: "daily",
    };
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
