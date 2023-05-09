import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import css from "../css/modules/App.module.css";

export default function Navbar() {
  return (
    <Box className={css.nav} sx={{ flexGrow: 1 }}>
      <AppBar className={css.bar} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
