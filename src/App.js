import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import "./App.css";
import TrackNameDisplay from "./components/TrackNameDisplay";
import { Paper } from "@mui/material";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Paper
        className="music-app"
        sx={{
          maxWidth: "770px",
          margin: "6rem auto",
          border: "2px solid white",
          borderRadius: "20px",
        }}
        elevation={3}
      >
        <TrackNameDisplay sx={{ padding: "10px" }} />
        <TrackList />

        <Controller />
      </Paper>
    </MusicPlayerProvider>
  );
};

export default App;
