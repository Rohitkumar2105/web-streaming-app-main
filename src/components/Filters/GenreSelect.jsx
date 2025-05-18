import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function GenreSelect({ genres, selected, onChange }) {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Genre</InputLabel>
      <Select value={selected} onChange={onChange} label="Genre">
        <MenuItem value="">All</MenuItem>
        {genres.map((g) => (
          <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
