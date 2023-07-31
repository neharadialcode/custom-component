import React, { useEffect, useState } from "react";

const searchData2 = [
  [
    { name: "one", class: "5th", hobby: "game playing" },
    { name: "Neha", class: "5th", hobby: "game playing" },
    { name: "Neha", class: "5th", hobby: "game playing" },
    { name: "palvi", class: "5th", hobby: "game playing" },
  ],
  [
    { name: "saini", class: "7th", hobby: "singing" },
    { name: "Muskan", class: "7th", hobby: "singing" },
    { name: "rahul", class: "7th", hobby: "singing" },
    { name: "Muskan", class: "7th", hobby: "singing" },
  ],
  [
    { name: "Anjali", class: "6th", hobby: "travelling" },
    { name: "payal", class: "6th", hobby: "travelling" },
    { name: "sweety", class: "6th", hobby: "travelling" },
    { name: "priya", class: "6th", hobby: "travelling" },
  ],
  [
    { name: "Palvi", class: "8th", hobby: "Dancing" },
    { name: "renu", class: "8th", hobby: "Dancing" },
    { name: "manvi", class: "8th", hobby: "Dancing" },
    { name: "priyanka", class: "8th", hobby: "Dancing" },
  ],
];

const SearchData = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValues, setSearchValues] = useState(
    Array(searchData2.length).fill("")
  );
  localStorage.setItem("searchData", JSON.stringify(searchData2));
  const newArr = localStorage.getItem("searchData");
  // console.log(newArr, "newArr");

  const handleCardClick = (index) => {
    if (activeIndex !== index) {
      setSearchValue1("");
      setSearchValues((prevSearchValues) => {
        const updatedSearchValues = [...prevSearchValues];
        updatedSearchValues[activeIndex] = "";
        return updatedSearchValues;
      });
    }
    setActiveIndex(index);
  };

  const handleSearchChange = (e) => {
    setSearchValue1(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search value:", searchValue1);
  };

  useEffect(() => {
    setSearchValues((prevSearchValues) => {
      const updatedSearchValues = [...prevSearchValues];
      updatedSearchValues[activeIndex] = searchValue1;
      return updatedSearchValues;
    });
  }, [activeIndex, searchValue1]);

  const data =
    searchValues[activeIndex] === ""
      ? searchData2[activeIndex]
      : searchData2[activeIndex].filter((obj) =>
          obj.name.includes(searchValues[activeIndex])
        );

  return (
    <div className="container py-5">
      <div className="row">
        {searchData2.map((obj, index) => (
          <div className="col-3" key={index}>
            <div
              className={`dataCard ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <h1>{index + 1}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="row pt-3">
        <div className="col-9">
          <form onSubmit={handleSearchSubmit}>
            <input
              onChange={handleSearchChange}
              placeholder="Search here"
              className="w-100 h-100 ps-3"
              type="search"
              value={searchValue1}
            />
          </form>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100" onClick={handleSearchSubmit}>
            SEARCH
          </button>
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
          {data.map((obj, i) => (
            <tr key={i}>
              <td>{obj.name}</td>
              <td>{obj.class}</td>
              <td>{obj.hobby}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchData;
