import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import style from "../css/modules/App.module.css";

export default function Navbar() {
  return (
    <Box className={style.nav} sx={{ flexGrow: 1 }}>
      <AppBar className={style.bar} position="static">
        <Toolbar className={style.tb}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
