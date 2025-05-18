import { Box, Typography, Slider } from "@mui/material";

export default function RatingSlider({ minRating, onChange }) {
  return (
    <Box sx={{ width: 200 }}>
      <Typography gutterBottom>Min Rating: {minRating}</Typography>
      <Slider
        value={minRating}
        onChange={onChange}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
