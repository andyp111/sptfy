import { GET_USER_TOP_TRACKS } from '../types';


const initialState = {
    topTracks: []
}

const getUserTopTracksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_TOP_TRACKS:
            return {
                ...state,
                topTracks: action.topTracks
            }
            default: return state
    }
}

export default getUserTopTracksReducer