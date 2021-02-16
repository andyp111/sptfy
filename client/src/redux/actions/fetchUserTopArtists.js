import axios from 'axios';
import { GET_USER_TOP_ARTISTS, USER_ERROR } from '../types';
import store from '../store/store.js';
import queryString from 'query-string';

export const fetchUserTopArtists = () => {

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    return async function(dispatch) {
        return await axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
            .then((result) => {
                console.log(result.data.items);
                dispatch({
                    type: GET_USER_TOP_ARTISTS,
                    topArtists: result.data.items.map(item => ({
                        name: item.name,
                        image: item.images[0].url
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
