import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Notifications from "./components/Notifications";

interface Events {
  connection: boolean;
  volume: number;
  quality: string;
}

function App() {
  const [loggedIn, setLoggedIn]: [boolean, Function] = React.useState(false);
  const [notifications, setNotifications]: [
    string[],
    Function
  ] = React.useState([]);
  const [events, setEvents]: [Events, Function] = React.useState({
    connection: true,
    volume: 0,
    quality: "high",
  });
  return (
    <main>
      <Navbar />
      {loggedIn ? (
        <>
          <Dashboard
            notifications={notifications}
            setNotifications={setNotifications}
            events={events}
            setEvents={setEvents}
          />
          <Notifications
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </main>
  );
}

export default App;
