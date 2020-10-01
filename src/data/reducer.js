export const initialState = {
    token: null,
    user: null,
    playlists: [],
    playing: false,
    item: null,
    currentPlaylist: '37i9dQZF1DX9tzt7g58Xlh',
    currentSong: {
        name: 'No song playing',
        artist: 'No artist',
        imageUrl: "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2/image-size/original?v=mpbl-1&px=-1"
    }
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlist
            }
        case 'SET_PLAYLISTINFO':
            return {
                ...state,
                playlistInfo: action.playlistsInfo
            }
        case 'SET_CURRENTPLAYLIST':
            return {
                ...state,
                currentPlaylist: action.currentPlaylist
            }
        case 'SET_CURRENTSONG':
            return {
                ...state,
                currentSong: action.songPlaying
            }
        default:
            return state;
    }
}

export default reducer;