import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenfromResponse } from './services/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './data/DataLayer';

const spotify = new SpotifyWebApi();

const App = () => {

  const [{ token, currentPlaylist }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenfromResponse();
    window.location.hash = "";

    const _token = hash.access_token;
    if(_token){
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe()
      .then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists()
      .then(playlist => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist
        });
      });

      spotify.getPlaylist(currentPlaylist).
      then(playlistsInfo => {
        dispatch({
          type: 'SET_PLAYLISTINFO',
          playlistsInfo: playlistsInfo
        });
      });

    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
