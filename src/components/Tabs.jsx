import React, { useState } from "react";

const tabsData2 = [
  {
    btnText: "ONE",
    tabContent: "First content",
  },
  {
    btnText: "TWO",
    tabContent: "second content",
    tabContent2: "Main content",
  },
  {
    btnText: "THREE",
    tabContent: "third content",
  },
  {
    btnText: "FOUR",
    tabContent: "fourth content",
  },
];

const Tabs = () => {
  const [activeStates, setActiveStates] = useState(tabsData2.map(() => false));

  const handleCheckboxChange = (index) => {
    const updatedStates = [...activeStates];
    updatedStates[index] = !updatedStates[index];
    setActiveStates(updatedStates);
  };

  return (
    <div>
      {tabsData2.map((obj, index) => (
        <div key={index}>
          <input onChange={() => handleCheckboxChange(index)} type="checkbox" />
          {obj.btnText}
          <p className={activeStates[index] ? "text_danger" : ""}>
            {obj.tabContent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
