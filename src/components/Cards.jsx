import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import style from "../css/modules/App.module.css";

export default function Cards(props) {
  const { eventLabels, eventInfo, eventMethods } = props;

  return (
    <Card variant="outlined" sx={{ padding: "1rem", paddingBottom: "2rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {eventLabels}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {eventInfo}
        </Typography>
      </CardContent>
      {eventMethods}
    </Card>
  );
}
