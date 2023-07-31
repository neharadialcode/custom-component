import React from "react";
import { useNavigate } from "react-router-dom";

const SomeBtns = ({ setId }) => {
  const btnValue = ["ONE", "TWO", "THREE", "FOUR"];
  let navigate = useNavigate();
  return (
    <div>
      {btnValue.map((obj, i) => (
        <button onClick={() => navigate(`/second-page/${i + 1}`)} key={i}>
          {obj}
        </button>
      ))}
    </div>
  );
};

export default SomeBtns;
