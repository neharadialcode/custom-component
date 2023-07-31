// import React from "react";
// import Component2 from "./Component2";
// import Component3 from "./Component3";
// import useDarkMode from "../context/useButtonclick";

// const Component1 = () => {
//   const { isDarkMode, setIsDarkMode } = useDarkMode();
//   console.log(isDarkMode, "isDarkMode");
//   return (
//     <div>
//       <div>
//         <h1>My App</h1>
//         <button onClick={() => setIsDarkMode(!isDarkMode)}>
//           {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
//         </button>
//       </div>
//       <Component2 />
//       <Component3 />
//     </div>
//   );
// };

// export default Component1;
import React from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import useDarkMode from "../context/useButtonclick";

const Component1 = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  console.log(isDarkMode, "isDarkMode");
  return (
    <div>
      <div>
        <h1>My App</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>
      <Component2 />
      <Component3 />
    </div>
  );
};

export default Component1;
