import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [option, setOption] = useState(1);

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span key={number} >
          <div  className={option === 1 ? "active-page" : "inactive"} onClick={() => paginate(number)}>{number}</div>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
