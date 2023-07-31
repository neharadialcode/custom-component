import React, { useEffect, useState } from "react";

const data = [
  {
    class: 1,
    searchValue: "",
  },
  {
    class: 2,
    searchValue: "",
  },
  {
    class: 3,
    searchValue: "",
  },
  {
    class: 4,
    searchValue: "",
  },
];
const tableData = [
  { name: "saini", class: 1, hobby: "singing" },
  { name: "Muskan", class: 2, hobby: "dancing" },
  { name: "rahul", class: 3, hobby: "travelling" },
  { name: "Muskan", class: 4, hobby: "singing" },
  { name: "saini", class: 4, hobby: "dancing" },
  { name: "Muskan", class: 3, hobby: "writing" },
  { name: "rahul", class: 2, hobby: "sleeping" },
  { name: "Muskan", class: 1, hobby: "dancing" },
  { name: "saini", class: 2, hobby: "wrinting" },
  { name: "Muskan", class: 4, hobby: "travelling" },
  { name: "rahul", class: 4, hobby: "dancing" },
  { name: "Muskan", class: 2, hobby: "singing" },
  { name: "saini", class: 3, hobby: "dancing" },
  { name: "Muskan", class: 4, hobby: "singing" },
  { name: "rahul", class: 2, hobby: "travelling" },
  { name: "Muskan", class: 4, hobby: "singing" },
];

const SearchData2 = () => {
  const [classData, setClassData] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSearch = (e) => {
    setClassData((prev) => {
      const newArr = prev.map((item, i) => {
        if (i === activeIndex) {
          return {
            ...item,
            searchValue: e.target.value,
          };
        } else {
          return item;
        }
      });
      return newArr;
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((obj, i) => (
            <div className={`col-3 mt-4`}>
              <h1
                className={`dataCard ${
                  classData[activeIndex].class === i + 1
                    ? "bg-danger text-white"
                    : ""
                }`}
                onClick={() => setActiveIndex(i)}
              >
                {obj.class}
              </h1>
            </div>
          ))}
        </div>
        <div className="row pt-3">
          <div className="col-9">
            <input
              onChange={handleSearch}
              placeholder="Search here"
              className="w-100 h-100 ps-3"
              type="search"
              value={classData[activeIndex].searchValue}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-dark w-100">SEARCH</button>
          </div>
        </div>

        <table className="w-100 mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              (obj, i) =>
                obj.class == classData[activeIndex].class &&
                obj.name
                  .toLowerCase()
                  .includes(
                    classData[activeIndex].searchValue.toLowerCase()
                  ) && (
                  <tr key={i}>
                    <td>{obj.name}</td>
                    <td>{obj.class}</td>
                    <td>{obj.hobby}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchData2;
