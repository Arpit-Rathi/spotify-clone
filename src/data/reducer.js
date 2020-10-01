export const initialState = {
    token: null,
    user: null,
    playlists: [],
    playing: false,
    item: null,
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
        default:
            return state;
    }
}

export default reducer;