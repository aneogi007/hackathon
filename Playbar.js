import React, { useEffect, useState } from 'react';
import {useDataLayerValue } from "../DataLayer";
import './Playbar.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Playbar({ spotify }) {
    const[{token, item, playing, timestamp}, dispatch] = useDataLayerValue();
    
    useEffect(() => {
        //get rid of comment at end HEHHEHEHEHEH
        const interval = setInterval(() => {
            spotify.getMyCurrentPlaybackState().then((currentSong) => {
                console.log(currentSong);

                dispatch({
                    type: "SET_PLAYING",
                    playing: currentSong.is_playing,
                });

                dispatch({
                    type: "SET_ITEM",
                    item: currentSong.item,
                });

                dispatch({
                    type: "SET_TIME",
                    timestamp: currentSong.progress_ms,
                });
            });
        }, 500);
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };
    
      const skipNext = () => {
        spotify.skipToNext();
      };
    ////SEE IF YOU DONT HAVE TO FETCH DATA SINCE WE ALREADY HAVE A LOOP
      const skipPrevious = () => {
        spotify.skipToPrevious();
      };
  

    
    return(
        <div className="playbar">
            <div className="footer_left">
                <img
                    className="footer__albumLogo"
                    src= {item?.album.images[0].url}
                    alt={item?.name}     
                />
                <div className = "buttons">
                    <ShuffleIcon className="footer_green" />
                    <SkipPreviousIcon onClick={skipPrevious} className="footer_icon" />
                    <PlayCircleOutlineIcon onClick={handlePlayPause} fontSize = "large" className = "footer_icon" />
                    <SkipNextIcon onClick={skipNext} className="footer_icon" />
                    <RepeatIcon className="footer_green" />
                </div>

                <div className="footer_right">
                    <p>Volume controls</p>
                </div>
                

                {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <h4>{timestamp}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Playbar