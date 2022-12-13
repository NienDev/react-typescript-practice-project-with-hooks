import {
  TextField,
  Chip,
  Box,
  Button,
  ChipPropsColorOverrides,
} from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Movies.css";
import { OverridableStringUnion } from "@mui/types";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);

  // context
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);

  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as OverridableStringUnion<
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning",
    ChipPropsColorOverrides
  >;

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favorite movie..."
          variant="outlined"
          className=""
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className="your-favorite-chip"
            onDelete={() => {
              deleteMovie(movie.id);
            }}
          ></Chip>
        ))}
      </Box>
    </>
  );
};

export default Movies;
