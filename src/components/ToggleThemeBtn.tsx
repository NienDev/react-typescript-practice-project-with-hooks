import { Fab } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ToggleThemeBtn.css";

const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color="primary"
      variant="extended"
      onClick={() => toggleTheme()}
      className="theme-btn"
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;
