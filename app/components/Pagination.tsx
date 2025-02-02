interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-lg">{`${currentPage} / ${totalPages}`}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  