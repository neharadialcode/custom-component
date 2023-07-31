import React, { useState } from "react";

const CustomPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  // Sample array of content
  const contentArray = [
    "Content 1",
    "Content 2",
    "Content 3",
    "Content 4",
    "Content 5",
    "Content 6",
    "Content 7",
    "Content 8",
    "Content 9",
    "Content 10",
    "Content 11",
    "Content 12",
    // Add more content items as needed
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderContent = () => {
    // Calculate the start and end indices of the content to be displayed
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the content items for the current page
    const pageContent = contentArray.slice(startIndex, endIndex);

    return pageContent.map((content, index) => (
      <div key={index} className="content-item">
        {content}
      </div>
    ));
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(contentArray.length / itemsPerPage);

    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      )
    );
  };

  return (
    <div className="custom-pagination">
      {renderContent()}
      <div className="pagination-buttons">
        <button
          className="prev_btn"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          className="next_btn"
          disabled={
            currentPage === Math.ceil(contentArray.length / itemsPerPage)
          }
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
