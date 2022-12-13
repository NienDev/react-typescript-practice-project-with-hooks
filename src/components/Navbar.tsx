import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Chip,
  SelectChangeEvent,
  createTheme,
} from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import "./Navbar.css";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [position, setPosition] = useState<string>("Full-stack Developer"); //generic type

  // context
  const { lastTime, status } = useContext(ProgressContext);

  const onPositionChange = (event: SelectChangeEvent<string>) =>
    setPosition(event.target.value as string);

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer); //cleanup function
  }, []);


  return (
    <AppBar position="static" color={theme} className="appbar-transition">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies </Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Las time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className="select-box"
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained" className="login-btn">
              Login
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
