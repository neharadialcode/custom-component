import React from "react";
import { useNavigate } from "react-router-dom";

const CommonHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="container mb-5 mt-3">
      <ul className="d-flex justify-content-between list-unstyled header_btn flex-wrap">
        <li onClick={() => navigate("/pagination")}>pagination</li>
        <li onClick={() => navigate("/search")}>search</li>
        <li onClick={() => navigate("/image-tabs")}>image-tabs</li>
        <li onClick={() => navigate("/payment")}>payment</li>
        <li onClick={() => navigate("/duration")}>duration</li>
        <li onClick={() => navigate("/event-form")}>event-form</li>
        <li onClick={() => navigate("/form")}>form</li>
        <li onClick={() => navigate("/table-data")}>table-data</li>
        <li onClick={() => navigate("/table-data2")}>table-data2</li>
        <li onClick={() => navigate("/count")}>count</li>
        <li onClick={() => navigate("/second-page/1")}>second page</li>
        <li onClick={() => navigate("/infinite-scroll")}>infinite-scroll</li>
        <li onClick={() => navigate("/date-filter")}>date-filter</li>
        <li onClick={() => navigate("/cart")}>Cart</li>
        {/* <li onClick={() => navigate("/pagination")}>one</li>
        <li onClick={() => navigate("/pagination")}>one</li> */}
      </ul>
    </div>
  );
};

export default CommonHeader;
