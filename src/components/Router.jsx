import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Error from "./Error";
import App from "../App";
import Login from "./Login";

export default function Router() {
  return (
    <>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  );
}
