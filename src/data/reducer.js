export const initialState = {
    token: null,
    user: null,
    playlists: [],
    playing: false,
    item: null,
    currentPlaylist: '37i9dQZF1DX9tzt7g58Xlh'
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
        default:
            return state;
    }
}

export default reducer;