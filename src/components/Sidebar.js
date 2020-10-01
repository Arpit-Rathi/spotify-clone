import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from '../data/DataLayer';

const Sidebar = ({ spotify }) => {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="sidebar__logo"></img>
            <SidebarOption title="Home" Icon={HomeIcon} spotify={spotify}  id="37i9dQZF1DX9tzt7g58Xlh"/>
            <SidebarOption title="Search" Icon={SearchIcon} spotify={spotify}  />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} spotify={spotify}  />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map(playlist => <SidebarOption title={playlist.name} id={playlist.id} spotify={spotify} />)
            }
        </div>
    )
}

export default Sidebar;