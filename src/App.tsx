import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./components/Movies";

function App() {
  return (
    <MovieContextProvider>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <ToggleThemeBtn />
          <Navbar />
          <Movies />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </MovieContextProvider>
  );
}

export default App;
