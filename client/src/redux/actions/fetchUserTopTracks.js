import axios from 'axios';
import { GET_USER_TOP_TRACKS, USER_ERROR } from '../types';
import store from '../store/store.js';
import queryString from 'query-string';

export const fetchUserTopTracks = () => {

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    // let accessToken = store.getState().accessToken;
    

    return async function(dispatch) {
        return await axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then((result) => {
            console.log(result.data.items)
            dispatch({
                type: GET_USER_TOP_TRACKS,
                topTracks: result.data.items.map(item => ({
                    track: item.name,
                    artist: item.artists.map(artistName => {
                        return artistName.name
                    })
                }))
            })
        })
        .catch((error) => {
            dispatch({
                type: USER_ERROR,
                payload: console.log(error)
            })
        })
    }
}