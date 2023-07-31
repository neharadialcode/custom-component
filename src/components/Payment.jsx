import React, { useEffect, useState } from "react";
import { paymentData } from "./Helper";

const Payment = () => {
  const [radioBtn, setRadioBtn] = useState("1");
  const [radioBtn2, setRadioBtn2] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("name");
  const [newArr, setArr] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const radioValue = (e) => {
    setRadioBtn(e.target.value);
  };
  const radioValue2 = (e) => {
    setRadioBtn2(e.target.value);
  };
  console.log(radioBtn2, "radioBtn2");
  const [filteredPaymentData, setFilteredPaymentData] = useState(paymentData);
  useEffect(() => {
    // WITH TWO
    // if (radioBtn === "1" && radioBtn2 === "1") {
    //   setFilteredPaymentData(
    //     paymentData.filter(
    //       (val) => val.mode === "cash" && val.method === "full"
    //     )
    //   );
    // }
    // if (radioBtn === "1" && radioBtn2 === "2") {
    //   setFilteredPaymentData(
    //     paymentData.filter(
    //       (val) => val.mode === "online" && val.method === "full"
    //     )
    //   );
    // }
    // if (radioBtn === "1" && radioBtn2 === "3") {
    //   setFilteredPaymentData(
    //     paymentData.filter(
    //       (val) => val.mode === "other" && val.method === "full"
    //     )
    //   );
    // }
    // if (radioBtn === "2" && radioBtn2 === "1") {
    //   setFilteredPaymentData(
    //     paymentData.filter((val) => val.mode === "cash" && val.method === "EMI")
    //   );
    // }
    // if (radioBtn === "2" && radioBtn2 === "2") {
    //   setFilteredPaymentData(
    //     paymentData.filter(
    //       (val) => val.mode === "online" && val.method === "EMI"
    //     )
    //   );
    // }
    // if (radioBtn === "2" && radioBtn2 === "3") {
    //   setFilteredPaymentData(
    //     paymentData.filter(
    //       (val) => val.mode === "other" && val.method === "EMI"
    //     )
    //   );
    // }

    // CONPRESSED VERSION
    setFilteredPaymentData(
      paymentData.filter((val) => {
        if (
          (radioBtn === "1" && val.method === "full") ||
          (radioBtn === "2" && val.method === "EMI")
        ) {
          return (
            (radioBtn2 === "1" && val.mode === "cash") ||
            (radioBtn2 === "2" && val.mode === "online") ||
            (radioBtn2 === "3" && val.mode === "other")
          );
        }
        return false;
      })
    );
    setCurrentPage(1);
    setSearchValue("");
  }, [radioBtn, radioBtn2]);

  // PAGINATION CODE

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageContent = filteredPaymentData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPaymentData.length / itemsPerPage);
  const totalPages2 = Math.ceil(newArr.length / itemsPerPage);
  const newLength = searchValue === "" ? totalPages : totalPages2;
  useEffect(() => {
    if (selectValue === "name") {
      setArr(
        filteredPaymentData.filter((obj) =>
          obj.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
    if (selectValue === "id") {
      setArr(
        filteredPaymentData.filter((obj) =>
          String(obj.id).includes(searchValue)
        )
      );
    }
    if (selectValue === "course") {
      setArr(
        filteredPaymentData.filter((obj) =>
          obj.course.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);
  console.log(startIndex, endIndex);
  const updatedData =
    searchValue !== "" ? newArr.slice(startIndex, endIndex) : pageContent;

  const checkValue = searchValue !== "" ? newArr : filteredPaymentData;
  return (
    <div className="container py-4">
      <div className="d-flex  justify-content-between align-items-center registration">
        <div className="d-flex">
          <div className="p-3">
            <label className="pe-2" htmlFor="registration">
              Registration
            </label>
            <input
              id="registration"
              type="radio"
              name="one"
              value={1}
              checked={radioBtn === "1"}
              onChange={radioValue}
            />
          </div>
          <div className="p-3">
            <label className="pe-2" htmlFor="EMI">
              EMI
            </label>
            <input
              id="EMI"
              type="radio"
              name="one"
              value={2}
              checked={radioBtn === "2"}
              onChange={radioValue}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="px-3">
            <label className="pe-2" htmlFor="cash">
              Cash
            </label>
            <input
              id="cash"
              type="radio"
              name="payment"
              value="1"
              checked={radioBtn2 === "1"}
              onChange={radioValue2}
            />
          </div>
          <div className="px-3">
            <label className="pe-2" htmlFor="Online">
              Online
            </label>
            <input
              id="Online"
              type="radio"
              name="payment"
              value="2"
              checked={radioBtn2 === "2"}
              onChange={radioValue2}
            />
          </div>
          <div className="px-3">
            <label className="pe-2" htmlFor="Other">
              Other
            </label>
            <input
              id="Other"
              type="radio"
              name="payment"
              value="3"
              checked={radioBtn2 === "3"}
              onChange={radioValue2}
            />
          </div>
        </div>
      </div>
      {/* SEARCH INPUT */}
      <div className="search_div d-flex align-items-center">
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          name=""
          id=""
          className="me-3"
        >
          <option value="name">NAME</option>
          <option value="id">ID</option>
          <option value="course">COURSE</option>
        </select>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="SEACH"
          type="search"
          name=""
          value={searchValue}
          id=""
        />
      </div>
      {/* TABLE */}{" "}
      {updatedData.length === 0 ? (
        <h1 className="text-center">Data Not Found!</h1>
      ) : (
        <table className="w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mode</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            <>
              {updatedData.map((obj, i) => (
                <tr key={i}>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>{obj.mode}</td>
                  <td>{obj.method}</td>
                  <td>{obj.course}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      )}
      {checkValue.length > 5 && (
        <div className="pagination-buttons mt-5">
          <button
            className="next_btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: newLength }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? "active" : "numberBtn"}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="prev_btn"
            disabled={currentPage === newLength}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
