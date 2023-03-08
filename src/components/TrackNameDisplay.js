import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function TrackNameDisplay() {
  const { currentTrackName, isPlaying } = useMusicPlayer();
  return (
    <div id="scroll-container">
      {isPlaying ? (
        <div id="scroll-text">{`Now Playing: ${currentTrackName}`}</div>
      ) : (
        <div className="app-welcome">
          <GraphicEqIcon className="svg_icon" />

          <div className="app-name">Ecstatic</div>
        </div>
      )}
    </div>
  );
}

export default TrackNameDisplay;
