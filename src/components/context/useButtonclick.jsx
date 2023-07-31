// import { useState, useEffect } from "react";

// // export const useDarkMode = () => {

// // };

// export default function useDarkMode() {
//   const [isDarkMode, setIsDarkMode] = useState((pre) => (pre ? pre : false));
//   return {
//     isDarkMode,
//     setIsDarkMode,
//   };
// }

import { useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode, "pppppppppppp");
  return {
    isDarkMode,
    setIsDarkMode,
  };
}
