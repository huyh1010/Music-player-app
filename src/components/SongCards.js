import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

export default function SongCards({
  track,
  index,
  isPlaying,
  currentTrackIndex,
  playTrack,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
        height: "140px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            {track.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ fontSize: "8px", height: "12px" }}
          >
            {track.artist}
          </Typography>
        </CardContent>
        <Button
          onClick={() => playTrack(index)}
          sx={{
            margin: "auto",
            width: "70px",
            height: "30px",
          }}
          variant={"contained"}
          startIcon={
            index === currentTrackIndex && isPlaying ? (
              <HeadphonesIcon />
            ) : (
              <PauseCircleIcon />
            )
          }
        >
          Play
        </Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 120, objectFit: "fill" }}
        image={track.image}
        alt="Live from space album cover"
      />
    </Card>
  );
}
