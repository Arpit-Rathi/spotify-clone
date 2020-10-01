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
                <img src={playlistInfo?.images[0]?.url}></img>
                <div className="body__infoText">
                    <strong>{playlistInfo?.type.toUpperCase()}</strong>
                    <h2>{playlistInfo?.name}</h2>
                    <p>{playlistInfo?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                <hr />
                {playlistInfo?.tracks.items.map(song => <SongRow track={song.track} /> )}
            </div>
        </div>
    )
}

export default Body;