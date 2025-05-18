import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Typography variant="h4" gutterBottom>{movie.title}</Typography>

        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{ height: 400, mb: 2, borderRadius: 2 }}
        />

        <Typography variant="body1" mb={2}>{movie.overview}</Typography>
        <Typography variant="subtitle1" mb={1}>Rating: {movie.vote_average}</Typography>
        <Typography variant="subtitle2" mb={2}>Release Date: {movie.release_date}</Typography>

        <Button variant="contained" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
