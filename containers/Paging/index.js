import React, { useState, useEffect } from 'react';

const Paging = (props) => {
  const { page, limit, total, setPage } = props;
  let lastPage =
    total % limit !== 0
      ? (total - (total % limit)) / limit
      : total / limit === 1
      ? 0
      : total / limit;
  let arrNext = [];
  let arrLast = [];
  if (lastPage > 3) {
    if (page + 2 < lastPage) {
      arrNext = [page];
      if (page + 1 < lastPage - 1) {
        arrNext.push(page + 1);
      }
      arrLast = [lastPage - 1, lastPage];
    }

    if (page + 2 === lastPage) {
      arrNext = [page];
      if (page - 1 > 0) {
        arrNext.splice(0, 0, page - 1);
      }
      arrLast = [lastPage - 1, lastPage];
    }
    if (page + 1 === lastPage) {
      arrNext = [];
      if (page - 1 > 0) {
        arrNext.splice(0, 0, page - 1);
      }
      if (page - 2 > 0) {
        arrNext.splice(0, 0, page - 2);
      }
      arrLast = [page, lastPage];
    }
    if (page === lastPage) {
      arrNext = [];
      if (page - 2 > 0) {
        arrNext.splice(0, 0, page - 2);
      }
      if (page - 3 > 0) {
        arrNext.splice(0, 0, page - 3);
      }
      arrLast = [page - 1, lastPage];
    }
  } else {
    if (lastPage === 0) {
      arrNext = [0];
    }
    if (lastPage === 1) {
      arrNext = [0, 1];
    }
    if (lastPage === 2) {
      arrNext = [0, 1];
      arrLast = [2];
    }
    if (lastPage === 3) {
      arrNext = [0, 1];
      arrLast = [2, 3];
    }
  }
  return (
    <div className="pagination">
      {page !== 0 && (
        <>
          <span
            onClick={() => {
              setPage(0);
            }}
          >
            &lt;&lt;
          </span>
          <span
            onClick={() => {
              setPage(page - 1);
            }}
          >
            &lt;
          </span>
        </>
      )}
      {arrNext.map((item) => (
        <span className={page === item ? 'active' : ''} key={item} onClick={() => setPage(item)}>
          {item + 1}
        </span>
      ))}
      {arrNext?.length + arrLast?.length === 4 && <span>...</span>}
      {arrLast.map((item) => (
        <span className={page === item ? 'active' : ''} key={item} onClick={() => setPage(item)}>
          {item + 1}
        </span>
      ))}
      {page !== lastPage && (
        <>
          <span
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {' '}
            &gt;
          </span>
          <span
            onClick={() => {
              setPage(lastPage);
            }}
          >
            &gt;&gt;
          </span>
        </>
      )}
    </div>
  );
};

export default Paging;
