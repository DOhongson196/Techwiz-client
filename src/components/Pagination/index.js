import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';

function Pagination({ setCurrentPage, currentPage, totalPages }) {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <ReactPaginate
      breakLabel={<span className="my-4">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57] ml-2 rounded">
            <ChevronRightIcon />
          </span>
        ) : null
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel={
        showPrevButton ? (
          <span className="w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57] mr-2 rounded">
            <ChevronLeftIcon />
          </span>
        ) : null
      }
      containerClassName="flex items-center justify-center my-8"
      pageClassName="block border border-[#eaecef] dark:border-[#474D57] w-7 h-7 flex items-center justify-center rounded hover:border-primary"
      activeClassName="bg-primary"
    />
  );
}

export default Pagination;
