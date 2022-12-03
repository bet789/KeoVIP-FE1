import Link from 'next/link';
import React from 'react';

export const PostVideoCard = (props) => {
  const { data, isBig, index } = props;
  const { youtube_id, avatar, title, _id, slug } = data;
  return (
    <Link href={`/highlight/${slug ?? ''}-${_id}`}>
      <a className="post_video_item w-100 mb-0">
        <div className="post_thumbnail w-40 w-lg-100">
          <picture>
            <img
              className="w-100"
              src={avatar}
              alt={title}
              style={{
                maxHeight: isBig ? 517 : 150,
                minHeight: 150,
                ...(isBig && { minHeight: 517 }),
              }}
            />
          </picture>
        </div>
        <div
          className={isBig ? 'post_content w-60 big' : 'post_content w-60 '}
          style={{
            ...(!isBig && {
              maxHeight: 110,
              minHeight: 110,
              padding: '20px 10px',
              backgroundColor: index % 2 === 0 ? '#121A3A' : '#64000E',
              fontSize: 15,
            }),
            ...(isBig && {
              position: 'absolute',
              bottom: 65,
              left: 30,
              fontSize: 22,
              fontWeight: 'bold',
            }),
          }}
        >
          {title}
        </div>
      </a>
    </Link>
  );
};
