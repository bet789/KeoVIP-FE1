import React from 'react';

export const PostCard = (props) => {
  const { data, isBig, first, postpage, homepage, url, index } = props;
  const { link, avatar, title } = data;
  return (
    <a
      href={`/${url ? url : 'tin-tuc'}/${data?.slug ?? ''}-${data?._id}`}
      className="post_item w-100 mb-0 "
    >
      <div className="post_thumbnail w-40 w-lg-100">
        <picture>
          <img
            className="w-100"
            src={
              avatar ??
              'https://cdn.xoilac7.net/2022/06/nhan-dinh-sagan-tosu-vs-tokyo-luc-17h-ngay-26-6-2022-1.jpg'
            }
            alt={title}
            style={
              first
                ? { maxHeight: homepage ? 560 : 393, ...(homepage && { minHeight: 372 }) }
                : postpage
                ? { maxHeight: 192, minHeight: 192 }
                : homepage
                ? { maxHeight: 230, minHeight: 230 }
                : {}
            }
          />
        </picture>
      </div>
      <div
        className={isBig ? 'post_content w-60 big' : 'post_content w-60 '}
        style={
          first
            ? {}
            : {
                height: '100%',
                ...(index && {
                  backgroundColor: index % 2 !== 0 ? '#121A3A !important' : '#64000E !important',
                }),
                backgroundColor: index % 2 !== 0 ? '#121A3A !important' : '#64000E !important',
              }
        }
      >
        <p style={first ? { fontWeight: 'bold', fontSize: 20 } : {}}>{title}</p>
      </div>
    </a>
  );
};
