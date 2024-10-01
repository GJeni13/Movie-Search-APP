// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button className='text-blue-600 font-bold text-xl cursor-pointer hover:bg-green-400' onClick={handlePrevious} disabled={currentPage === 1}>
        Previous page
      </button>
       {currentPage} <span className='ml-3 text-blue-600 font-bold text-xl cursor-pointer hover:bg-green-400 mr-3'>of</span>{totalPages}
      
      <button className='text-blue-600 font-bold text-xl cursor-pointer hover:bg-green-400' onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
