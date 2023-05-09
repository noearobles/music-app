import React from "react";
import { Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Notifications(props) {
  const { notifications, setNotifications } = props;

  function handleDelete(index) {
    const filteredNotif = [...notifications];
    filteredNotif.splice(index,1)

    setNotifications(filteredNotif);
  }

  return (
    <section>
      <Typography gutterBottom variant="h4">
        Notifications
      </Typography>
      <ul>
        {notifications.map((alert, index) => (
          <li key={index} index={index}>
            <Delete fontSize="small" onClick={() => handleDelete(index)} />
            <Typography variant="body2" sx={{ display: "inline" }}>
              {alert}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
}
