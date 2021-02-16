import { GET_USER_TOP_ARTISTS } from '../types';

const initialState = {
    topArtists: []
}

const getUserTopArtistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_TOP_ARTISTS:
            return {
                ...state,
                topArtists: action.topArtists
            }
            default: return state
    }
}

export default getUserTopArtistsReducer