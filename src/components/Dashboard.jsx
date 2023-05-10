import React from "react";
import { Slider, Switch, FormControl, Select, MenuItem } from "@mui/material";
import Cards from "./Cards";
import style from "../css/modules/App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard(props) {
  const { events, setEvents } = props;

  const eventLabels = {
    connection: "Connection",
    volume: "Volume",
    quality: "Quality",
  };

  const eventInfo = {
    connection: "Toggle between online and offline.",
    volume: "Adjust volume.",
    quality: "Select a lower audio quality if there is audio reduction",
  };

  const eventMethods = {
    connection: (
      <Switch
        defaultChecked
        name="connection"
        sx={{ marginBottom: "1rem" }}
        onChange={handleConnection}
      />
    ),
    volume: (
      <Slider
        marks
        defaultValue={0}
        min={0}
        max={100}
        step={10}
        valueLabelDisplay="auto"
        onChange={handleVolume}
      />
    ),
    quality: (
      <FormControl fullWidth>
        <Select value={events.quality} onChange={handleQuality}>
          <MenuItem value={"high"}>High</MenuItem>
          <MenuItem value={"mid"}>Mid</MenuItem>
          <MenuItem value={"low"}>Low</MenuItem>
        </Select>
      </FormControl>
    ),
  };

  function handleConnection() {
    if (events.connection === true) {
      toast("Offline");
    } else if (events.connection === false) {
      toast("Online");
    }
    setEvents({ ...events, connection: !events.connection });
  }

  function handleVolume(e) {
    let alert;
    const audio = document.querySelector("audio");

    if (e.target.value === 80) {
      toast(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    } else if (e.target.value === 0) {
      toast("Audio is muted.");
    }

    audio.play();
    audio.volume = e.target.value / 100;
    setEvents({ ...events, volume: e.target.value });
  }

  function handleQuality(e) {
    let alert;

    if (e.target.value === "low") {
      alert = toast(
        "Music qaulity is degraded. Increase quality if your connection allows it."
      );
    } else if (e.target.value === "mid" || "high") {
      toast(`Music qaulity is set to ${e.target.value}`);
    }
    setEvents({ ...events, quality: e.target.value });
  }

  return (
    <>
      <section className={style.dashboard}>
        <audio>
          <source
            src="music/(Disc 2) 01 - Scarface (Push It To The Limit).mp3"
            type="audio/mpeg"
          ></source>
        </audio>
        <Cards
          eventLabels={eventLabels.connection}
          eventInfo={eventInfo.connection}
          eventMethods={eventMethods.connection}
        ></Cards>
        <Cards
          eventLabels={eventLabels.volume}
          eventInfo={eventInfo.volume}
          eventMethods={eventMethods.volume}
        ></Cards>
        <Cards
          eventLabels={eventLabels.quality}
          eventInfo={eventInfo.quality}
          eventMethods={eventMethods.quality}
        ></Cards>
      </section>
      <ToastContainer className={style.modal} position="bottom-right" />
    </>
  );
}
