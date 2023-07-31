import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollComponent = () => {
  const [page, setPage] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const listArr = page === 0 ? arr : arr2;
  return (
    <div className="" id="parent">
      <InfiniteScroll
        dataLength={arr.length}
        next={arr}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="parent"
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {listArr.map((items, i) => items)}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollComponent;
