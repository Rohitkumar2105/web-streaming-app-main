import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import Header from "../components/Header";
import FilterBar from "../components/Filters/FilterBar";
import { fetchGenres } from "../api/tmdb";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    fetchGenres().then(setGenres);
    fetchPopularMovies().then((results) => {
      setAllMovies(results);
      applyFilters(results, selectedGenre, minRating);
    });
  }, []);

  useEffect(() => {
    applyFilters(allMovies, selectedGenre, minRating);
  }, [selectedGenre, minRating]);

  const applyFilters = (movies, genre, rating) => {
    const filtered = movies.filter((movie) =>
      (!genre || movie.genre_ids.includes(Number(genre))) &&
      movie.vote_average >= rating
    );
    setDisplayedMovies(filtered);
  };

  const handleSearch = async (query) => {
    let results = [];

    if (!query.trim()) {
      results = await fetchPopularMovies();
    } else {
      results = await searchMovies(query);
    }

    setAllMovies(results);
    applyFilters(results, selectedGenre, minRating);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        minRating={minRating}
        onGenreChange={(e) => setSelectedGenre(e.target.value)}
        onRatingChange={(_, val) => setMinRating(val)}
      />
      <div style={{ padding: "1rem" }}>
        <MovieGrid movies={displayedMovies} />
      </div>
    </>
  );
}
