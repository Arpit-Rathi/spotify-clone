import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../data/DataLayer';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';

const Body = ({ spotify }) => {

    const [{ playlistInfo }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            
            <div className="body__info">
                <img src={playlistInfo?.images[0]?.url || "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2/image-size/original?v=mpbl-1&px=-1"}></img>
                <div className="body__infoText">
                    <strong>{playlistInfo?.type.toUpperCase()}</strong>
                    <h2>{playlistInfo?.name}</h2>
                    <p>{playlistInfo?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    {playlistInfo?.tracks.items.length > 0 ? <PlayCircleFilled className="body__shuffle"/> : null}
                    {playlistInfo?.tracks.items.length > 0 ? <Favorite fontSize="large" /> : null}
                    {playlistInfo?.tracks.items.length > 0 ? <MoreHoriz /> : null}
                </div>
                {playlistInfo?.tracks.items.length > 0 ? <hr /> : null}

                {playlistInfo?.tracks.items.map(song => <SongRow track={song.track} /> )}
            </div>
            {playlistInfo?.tracks.items.length == 0 ? (
                    <div className="body__emptySong">
                        <h1>It's a bit empty here...</h1>
                        <p>Go to home to find songs you like</p>
                    </div>
                ) : null}
        </div>
    )
}

export default Body;