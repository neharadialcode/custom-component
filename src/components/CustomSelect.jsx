import React, { useState } from "react";

const CustomSelect = () => {
  const options = ["RED", "GREEN", "BLUE"];
  const [show, setShow] = useState(false);
  const [optionValue, setValue] = useState("CHoose your color");
  return (
    <div>
      <h1 onClick={() => setShow(!show)}>{optionValue}</h1>
      {show && (
        <ul>
          {options.map((obj, i) => (
            <li
              onClick={() => {
                setValue(obj);
                setShow(false);
              }}
            >
              {obj}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
