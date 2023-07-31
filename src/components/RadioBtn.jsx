import React, { useState } from "react";

const RadioBtn = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a radio button option is selected
    if (selectedOption === "") {
      alert("Please select an option");
      return; // Stop further execution
    }

    // Proceed with further actions
    console.log("Selected option:", selectedOption);
    // ...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Option 1
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          Option 2
          <input
            type="radio"
            name="option"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
        </label>
        <label>
          Option 3
          <input
            type="radio"
            name="option"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RadioBtn;
