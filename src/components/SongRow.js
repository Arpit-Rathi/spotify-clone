import React from 'react';
import { useDataLayerValue } from '../data/DataLayer';
import './SongRow.css'

const SongRow = ({ track }) => {

    const [{ currentSong }, dispatch] = useDataLayerValue()

    const changeSong = (song) => {
        const name = song.name;
        const artist = song.artists.map((artist) => artist.name).join(", ");
        const imageUrl = song.album.images[0].url;
        const songPlaying = {
            name: name,
            artist: artist,
            imageUrl: imageUrl
        }
        dispatch({
          type: 'SET_CURRENTSONG',
          songPlaying: songPlaying
        });
    }

    return (
        <div className="songRow" onClick={() => changeSong(track)}>
            <img src={track.album.images[0].url} className="songRow__album"></img>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {" - "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;