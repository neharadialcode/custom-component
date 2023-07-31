// import React from "react";
// import useDarkMode from "../context/useButtonclick";

// const Component2 = () => {
//   const { isDarkMode } = useDarkMode();
//   console.log(isDarkMode, "isDarkMode222");
//   return (
//     <div
//       className={` ${isDarkMode ? "text-white bg-dark" : "bg-white text-dark"}`}
//     >
//       <button>Two</button>
//     </div>
//   );
// };

// export default Component2;
import React from "react";
import useDarkMode from "../context/useButtonclick";

const Component2 = () => {
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode, "isDarkMode222");

  return (
    <div
      className={`${isDarkMode ? "text-white bg-dark" : "bg-white text-dark"}`}
    >
      <button>Two</button>
    </div>
  );
};

export default Component2;
