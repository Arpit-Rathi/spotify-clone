import { Avatar } from '@material-ui/core';
import { CloseOutlined, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDataLayerValue } from '../data/DataLayer';
import './Header.css';
import SongRow from './SongRow';

const Header = ({ spotify }) => {

    const [{ user }, dispatch] = useDataLayerValue();

    const [searchTerm, setSearchTerm] = useState('');
    const [songList, setSongList] = useState([]);

    const searchChangeHandler = (e) => {
        setSearchTerm(e.target.value)
        spotify.searchTracks(e.target.value, { limit: 5 })
        .then(
            function (data) {
            // clean the promise so it doesn't call abort
            setSongList(data.tracks.items)

            // ...render list of search results...
            },
            function (err) {
            console.error(err);
            }
        );
        if(e.target.value.length == 0) {
            setSongList([]);
        }
    }

    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Search />
                    <input placeholder="Search songs" value={searchTerm} onChange={(e) => searchChangeHandler(e)}></input>
                </div>
                <div className="header__right">
                    <Avatar src={user?.images[0]?.url} alt="AR" >{user?.display_name[0] || "User"}</Avatar>
                    <h4>{user?.display_name || "User"}</h4>
                    <span></span>
                </div>
            </div>
            
            {searchTerm.length > 0 ? (
                <div className="header__search">
                    <div className="searchHeader">
                        <h2>Top search results</h2>
                        <CloseOutlined onClick={() => setSearchTerm('')} />
                    </div>
                    {songList.map(song => <SongRow track={song} /> )}
                    {songList.length == 0 ? <h1>No songs found for "{searchTerm}"</h1> : null}
                </div>
            ) : null}
        </>
    )
}

export default Header;