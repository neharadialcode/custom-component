import React, { useEffect, useState } from "react";

const dataArray = [
  { id: 1, name: "Item 1", date: "2023-07-18" },
  { id: 2, name: "Item 2", date: "2023-07-18" },
  { id: 3, name: "Item 3", date: "2023-07-18" },
  { id: 4, name: "Item 3", date: "2023-07-17" },
  { id: 5, name: "Item 3", date: "2023-07-18" },
  { id: 6, name: "Item 3", date: "2023-07-17" },
  { id: 7, name: "Item 3", date: "2023-07-16" },
  { id: 8, name: "Item 3", date: "2023-07-17" },
  { id: 9, name: "Item 3", date: "2023-07-16" },
  { id: 10, name: "Item 3", date: "2023-07-16" },
];

const DateFilter = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredDates, setFilteredDates] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to filter dates based on the selected option
  const filterDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let filterDate;
    if (selectedOption === "today") {
      const today1 = new Date(today);
      today1.setDate(today.getDate() + 1);
      filterDate = today1.toISOString().slice(0, 10);
    } else if (selectedOption === "tomorrow") {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 2);
      filterDate = tomorrow.toISOString().slice(0, 10);
    } else if (selectedOption === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate());
      filterDate = yesterday.toISOString().slice(0, 10);
    }

    // Filter the dates array based on the selected option
    const filteredItems = dataArray.filter((item) => item.date === filterDate);
    setFilteredDates(filteredItems);
  };

  // Call the filterDates function when the selected option changes
  useEffect(() => {
    filterDates();
  }, [selectedOption]);

  const updatedArr = selectedOption === "" ? dataArray : filteredDates;
  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="yesterday">Yesterday</option>
      </select>

      {/* Display the filtered dates here */}
      <div>
        {updatedArr.map((item) => (
          <p key={item.id}>{item.date}</p>
        ))}
      </div>
    </div>
  );
};

export default DateFilter;
