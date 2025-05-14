// import React from 'react';
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// const Pagination = () => {
//   return (
//     <div className="flex items-center justify-center gap-2">
//       {/* Prev Button */}
//       <button className="flex items-center px-3 py-2 bg-white rounded-md text-[#111B19] hover:bg-gray-50 border border-gray-200">
//         <IoChevronBack className="mr-1" />
//         <span>Prev</span>
//       </button>
      
//       {/* Page 1 */}
//       <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FFF] text-[#111B19] hover:bg-gray-50 border border-gray-200">
//         1
//       </button>
      
//       {/* Page 2 - Active */}
//       <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#D0A148] text-[#FFFFFF] border border-[#D0A148]">
//         2
//       </button>
      
//       {/* Page 3 */}
//       <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#111B19] hover:bg-gray-50 border border-gray-200">
//         3
//       </button>
      
//       {/* Ellipsis */}
//       <div className="w-10 h-10 flex items-center bg-[#FFF] rounded-md justify-center text-[#111B19]">
//         ...
//       </div>
      
//       {/* Page 6 */}
//       <button className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#111B19] hover:bg-gray-50 border border-gray-200">
//         6
//       </button>
      
//       {/* Next Button */}
//       <button className="flex items-center px-3 py-2 bg-white rounded-md text-[#111B19] hover:bg-gray-50 border border-gray-200">
//         <span>Next</span>
//         <IoChevronForward className="ml-1" />
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    const pages = [];

    // Simple logic to show pages near currentPage
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              i === currentPage
                ? 'bg-[#D0A148] text-white border border-[#D0A148]'
                : 'bg-white text-[#111B19] hover:bg-gray-50 border border-gray-200'
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (
        pages[pages.length - 1] !== 'ellipsis'
      ) {
        pages.push(
          <div key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-[#111B19]">
            ...
          </div>
        );
        pages.push('ellipsis'); // to prevent duplicate ellipsis
      }
    }

    return pages.filter((item) => item !== 'ellipsis');
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev */}
      <button
        className="flex items-center px-3 py-2 bg-white rounded-md text-[#111B19] hover:bg-gray-50 border border-gray-200"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack className="mr-1" />
        <span>Prev</span>
      </button>

      {/* Page Numbers */}
      {renderPages()}

      {/* Next */}
      <button
        className="flex items-center px-3 py-2 bg-white rounded-md text-[#111B19] hover:bg-gray-50 border border-gray-200"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <IoChevronForward className="ml-1" />
      </button>
    </div>
  );
};

export default Pagination;