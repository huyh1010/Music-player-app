import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import "react-multi-carousel/lib/styles.css";
import SongCards from "./SongCards";
import Grid from "@mui/material/Grid";

const TrackList = () => {
  const { trackList, playTrack, currentTrackIndex, isPlaying } =
    useMusicPlayer();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ padding: "12px", justifyContent: "center", alignItems: "center" }}
      >
        {trackList.map((track, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={track.id}>
            <SongCards
              track={track}
              index={index}
              currentTrackIndex={currentTrackIndex}
              isPlaying={isPlaying}
              playTrack={playTrack}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TrackList;
