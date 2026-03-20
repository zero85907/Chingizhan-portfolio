import { useState, useEffect } from "react";

export const useThemeSlice = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.className = isDark ? "light" : "dark";
  }, [isDark]);

  return [isDark, toggleTheme];
};