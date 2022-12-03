import React, { useState } from "react";
import InfiniteScrollComp from "react-infinite-scroll-component";

const InfiniteScroll = (props) => {
  const { limitInit, data, render } = props;
  const [limit, setLimit] = useState(limitInit);
  const getMorePost = () => {
    setLimit(limit + limitInit);
  };

  return (
    <InfiniteScrollComp
      dataLength={limit}
      next={getMorePost}
      hasMore={limit < data?.length}
      loader={<h3> Loading...</h3>}
    >
      {data
        ?.filter((item, index) => index < limit)
        ?.map((item, index) => render(item, index))}
    </InfiniteScrollComp>
  );
};

export default InfiniteScroll;
