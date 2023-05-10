import React from "react";
import { Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";
import style from "../css/modules/App.module.css";

export default function Notifications(props) {
  const { notifications, setNotifications } = props;

  function handleDelete(index) {
    const filteredNotif = [...notifications];
    filteredNotif.splice(index,1)

    setNotifications(filteredNotif);
  }

  return (
    <section className={style.notifContainer}>
      <Typography gutterBottom variant="h4">
        Notifications
      </Typography>
      <ul className={style.notifList}>
        {notifications.map((alert, index) => (
          <li key={index} index={index}>
            <Delete className={style.deleteButton} fontSize="small" onClick={() => handleDelete(index)} />
            <Typography variant="body2" sx={{ display: "inline" }}>
              {alert}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
}