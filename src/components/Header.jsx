import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function Header({ onSearch }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          StreamLite
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
            },
            borderRadius: 1,
            ml: { xs: 0, sm: 1 },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <InputBase
            placeholder="Search…"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch(e.target.value);
            }}
            sx={{
              color: 'inherit',
              paddingLeft: 2,
              width: '100%',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
