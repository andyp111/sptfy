import { GET_USER_PLAYLISTS } from '../types.js';

const initialState = {
    playlists: []
}

const getUserPlaylistInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
            default: return state
    }
}

export default getUserPlaylistInfoReducer 