import { Box } from "@mui/material";
import GenreSelect from "./GenreSelect";
import RatingSlider from "./RatingSlider";

export default function FilterBar({ genres, selectedGenre, minRating, onGenreChange, onRatingChange }) {
  return (
    <Box sx={{ display: 'flex', gap: 4, my: 2 }}>
      <GenreSelect genres={genres} selected={selectedGenre} onChange={onGenreChange} />
      <RatingSlider minRating={minRating} onChange={onRatingChange} />
    </Box>
  );
}
