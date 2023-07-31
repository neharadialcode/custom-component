import React, { useEffect, useState } from "react";
import { paymentData } from "./Helper";

const SearchWithSelect = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("name");
  const [newArr, setArr] = useState([]);
  useEffect(() => {
    if (selectValue === "name") {
      setArr(paymentData.filter((obj) => obj.name.includes(searchValue)));
    }
    if (selectValue === "method") {
      setArr(paymentData.filter((obj) => obj.method.includes(searchValue)));
    }
    if (selectValue === "mode") {
      setArr(paymentData.filter((obj) => obj.mode.includes(searchValue)));
    }

    console.log(selectValue, "cvbnm,");
  }, [searchValue]);
  return (
    <div className="container">
      {/* SEARCH INPUT */}
      <div className="search_div d-flex align-items-center">
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          name=""
          id=""
          className="me-3"
        >
          <option value="name">NAME</option>
          <option value="method">METHOD</option>
          <option value="mode">MODE</option>
        </select>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="SEACH"
          type="search"
          name=""
          id=""
        />
      </div>
      <table className="w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mode</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          {newArr.length > 0 ? (
            <>
              {newArr.map((obj, i) => (
                <tr key={i}>
                  <td>{obj.name}</td>
                  <td>{obj.mode}</td>
                  <td>{obj.method}</td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {paymentData.map((obj, i) => (
                <tr key={i}>
                  <td>{obj.name}</td>
                  <td>{obj.mode}</td>
                  <td>{obj.method}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchWithSelect;
