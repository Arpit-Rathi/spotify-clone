import React, { useEffect } from 'react';
import { useDataLayerValue } from '../data/DataLayer';
import './SidebarOption.css';

const SidebarOption = ({ title, Icon, id, spotify }) => {
    
    const [{ currentPlaylist }, dispatch] = useDataLayerValue()

    const changePlaylist = (id) => {
        dispatch({
            type: 'SET_CURRENTPLAYLIST',
            currentPlaylist: id
        });

        spotify.getPlaylist(id).
        then(playlistsInfo => {
            dispatch({
            type: 'SET_PLAYLISTINFO',
            playlistsInfo: playlistsInfo
            });
        });
    }

    return (
        <div className="sidebarOption" onClick={() => changePlaylist(id)}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;