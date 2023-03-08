import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import useMusicPlayer from "../hooks/usePlayerProvider";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

function Controller() {
  const { togglePlay, playNextTrack, playPreviousTrack, isPlaying } =
    useMusicPlayer();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ bgcolor: "rgba(255, 255, 255, 0.5)" }}
    >
      <SkipPreviousIcon
        onClick={playPreviousTrack}
        sx={{
          color: "white",
          "&:hover": { cursor: "pointer", bgcolor: "black" },
        }}
        fontSize="large"
      />
      <IconButton
        onClick={togglePlay}
        sx={{
          "&:hover": { cursor: "pointer", bgcolor: "black" },
          color: "white",
        }}
        fontSize="large"
      >
        {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </IconButton>

      <SkipNextIcon
        onClick={playNextTrack}
        sx={{
          color: "white",
          "&:hover": { cursor: "pointer", bgcolor: "black" },
        }}
        fontSize="large"
      />
    </Box>
  );
}

export default Controller;
