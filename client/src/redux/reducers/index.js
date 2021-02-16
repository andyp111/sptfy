import { combineReducers } from 'redux';
import getUserInfoReducer from './getUserInfo';
import getUserPlaylistInfoReducer from './getUserPlaylistInfo';

export default combineReducers({
    userInfo: getUserInfoReducer,
    playlists: getUserPlaylistInfoReducer
})