import { AppBar, IconButton, Toolbar } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledTypography,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import GifIcon from "@mui/icons-material/Gif";
export default function SearchAppBar({ handle_Change }) {
  const handleChange = (e) => {
    handle_Change(e.target.value);
  };
  return (
    <AppBar position="static" sx={{ background: "#303030" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <GifIcon fontSize="large" />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
          />
        </Search>
        <StyledTypography
          fontSize="30px"
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Giphy
        </StyledTypography>
      </Toolbar>
    </AppBar>
  );
}
