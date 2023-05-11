import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import style from "../css/modules/App.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar(props) {
  const { loggedIn, setLoggedIn } = props;
  function logOut(e) {
    setLoggedIn(false);
  }
  return (
    <>
      <Box className={style.nav} sx={{ flexGrow: 1 }}>
        <AppBar className={style.bar} position="static">
          <Toolbar className={style.tb}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Music App
            </Typography>{" "}
            {loggedIn ? (
              <Typography>
                <Link className={style.link} onClick={logOut} to="/login">
                  Log out
                </Link>
              </Typography>
            ) : (
              <> </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
