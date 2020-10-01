import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../data/DataLayer';
import './Header.css';

const Header = ({ spotify }) => {

    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input placeholder="Podcast"></input>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="AR" >{user?.display_name[0] || "User"}</Avatar>
                <h4>{user?.display_name || "User"}</h4>
            </div>
        </div>
    )
}

export default Header;