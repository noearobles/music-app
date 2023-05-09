import React from "react";
import { Button, TextField } from "@mui/material";
import style from "../css/modules/App.module.css";

export default function Login(props) {
  const { setLoggedIn } = props;

  const [credent, setCredent] = React.useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setCredent({ ...credent, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (credent.username === "username" && credent.password === "password") {
      alert("Logged in✅");
      setLoggedIn(true);
    } else {
      alert("Invalid crendtials. username is username, password is password");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        required
        variant="filled"
        label="Username"
        name="username"
        placeholder="Username"
        size="large"
        defaultValue={credent.username || ""}
        inputProps={{ maxLength: 20 }}
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        required
        variant="filled"
        type="password"
        label="Password"
        name="password"
        placeholder="password"
        size="large"
        defaultValue={credent.password || ""}
        inputProps={{ maxLength: 20 }}
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
      />
      <Button
        fullWidth
        variant="contained"
        type="submit"
        size="large"
        sx={{ background: "#3f51b4" }}
      >
        Login
      </Button>
    </form>
  );
}
