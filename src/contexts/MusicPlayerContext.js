import React, { useState } from "react";
import Track1 from "../mp3/Track1.mp3";
import Track2 from "../mp3/Track2.mp3";
import Track3 from "../mp3/Track3.mp3";
import Track4 from "../mp3/Track4.mp3";
import Track5 from "../mp3/Track5.mp3";
import Track6 from "../mp3/Track6.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      id: 0,
      name: "SHOOTING STAR",
      artist: "XG",
      file: Track1,
      image: "https://i.scdn.co/image/ab67616d00001e0253f126eb16bb3ab5720b0ba7",
    },
    {
      id: 1,
      name: "Die For You -Remix",
      artist: "The Weeknd, Ariana Grande",
      file: Track2,
      image: "https://i.scdn.co/image/ab67616d00001e028de12a274f6e1df6634f57ec",
    },
    {
      id: 2,
      name: " Am I Enough",
      artist: "Stephen William Cornish & Amanda Leigh Wilson",
      file: Track3,
      image: "https://i.scdn.co/image/ab67616d00001e02bd4effb4fc2b0a116df3cdf3",
    },
    {
      id: 3,
      name: "Lady",
      artist: "LE_J_JAMES feat (Kid Randie & Myster Sandman)",
      file: Track4,
      image:
        "https://usercontent.jamendo.com?type=album&id=499722&width=300&trackid=1980009",
    },
    {
      id: 4,
      name: " Fly",
      artist: "KRISTIAN VULJAR",
      file: Track5,
      image:
        "https://usercontent.jamendo.com?type=album&id=463557&width=300&trackid=1903094",
    },
    {
      id: 5,
      name: "OMG",
      artist: "NewJeans",
      file: Track6,
      image: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
