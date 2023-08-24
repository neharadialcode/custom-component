import { useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return {
    isDarkMode,
    setIsDarkMode,
  };
}
