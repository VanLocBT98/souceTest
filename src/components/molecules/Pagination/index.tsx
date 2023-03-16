/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import Icon from 'components/atoms/Icon';

interface PaginationProps {
  totalPage: number;
  pageCurrent?: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  handleChangePage: (val: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 2,
  pageCurrent,
  handleChangePage,
}) => {
  const [pageActive, setPageActive] = useState(0);

  const handlePageClick = (currentPage: { selected: number }) => {
    const { selected } = currentPage;
    handleChangePage(selected + 1);
    setPageActive(selected);
  };

  useEffect(() => {
    setPageActive(pageCurrent ? pageCurrent - 1 : 0);
  }, [pageCurrent]);

  return totalPage > 1 ? (
    <div className="m-pagination">
      <ReactPaginate
        previousLabel={(
          <Icon
            iconName="prev"
            size="10x10"
          />
        )}
        nextLabel={(
          <Icon
            iconName="next"
            size="10x10"
          />
        )}
        pageCount={totalPage}
        forcePage={pageActive}
        onPageChange={handlePageClick}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        containerClassName="main"
        breakClassName="page break"
        previousClassName="page"
        nextClassName="page"
        pageClassName="page"
        activeClassName="active-page"
        pageLinkClassName="link-page"
        breakLinkClassName="link-page link-break"
        nextLinkClassName="link-page link-next"
        previousLinkClassName="link-page link-previous"
      />
    </div>
  )
    : null;
};

Pagination.defaultProps = {
  pageCurrent: undefined,
  marginPagesDisplayed: 1,
  pageRangeDisplayed: 2,
};

export default Pagination;
