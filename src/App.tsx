import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

interface Events {
  connection: boolean;
  volume: number;
  quality: string;
}

function App() {
  const [loggedIn, setLoggedIn]: [boolean, Function] = React.useState(false);
  const [events, setEvents]: [Events, Function] = React.useState({
    connection: true,
    volume: 0,
    quality: "high",
  });
  return (
    <main>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (
        <>
          <Dashboard events={events} setEvents={setEvents} />
        </>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </main>
  );
}

export default App;
