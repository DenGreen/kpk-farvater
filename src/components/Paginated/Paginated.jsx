import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Paginated = ({ itemsPerPage, items, children }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {children(currentItems)}
      {items.length > 5 &&
        <div className="pagination__box">
          <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            nextLinkClassName="pagination__link pagination__link_arrow"
            previousLinkClassName="pagination__link pagination__link_arrow"
            previousClassName="pagination__item_arrow pagination__item_arrow_left"
            nextClassName="pagination__item_arrow pagination__item_arrow_right"
            pageLinkClassName="pagination__link pagination__link-int"
            breakLinkClassName="pagination__link pagination__link-int"
            pageClassName="pagination__item"
            activeLinkClassName="pagination__link_active"
            containerClassName="pagination__list"
            disabledClassName="pagination__item_arrow-dec"
          />
        </div>
      }
    </>
  );
};

export default Paginated;
