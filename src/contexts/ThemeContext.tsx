import { PropTypes } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: () => void;
}

const themeContextDefaultData = {
  theme: "secondary" as PropTypes.Color,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefault>(
  themeContextDefaultData
);

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(themeContextDefaultData.theme);

  const toggleTheme = () =>
    setTheme(theme == "primary" ? "secondary" : "primary");

  const themeContextDynamicData = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
