import { combineReducers } from 'redux';
import getUserInfoReducer from './getUserInfo';
import getUserPlaylistInfoReducer from './getUserPlaylistInfo';
import getUserTopTracksReducer from './getUserTopTracks';
import getUserTopArtistsReducer from './getUserTopArtists';

export default combineReducers({
    userInfo: getUserInfoReducer,
    playlists: getUserPlaylistInfoReducer,
    topTracks: getUserTopTracksReducer,
    topArtists: getUserTopArtistsReducer
})