import axios from 'axios';

import { GET_USER_PLAYLISTS, USER_ERROR } from '../types';
import queryString from 'query-string';

export const fetchPlaylistInfo = () => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    return function(dispatch) {
        return axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
              'Authorization': 'Bearer ' + accessToken
            }
          })
          .then((result) => {
              dispatch({
                  type: GET_USER_PLAYLISTS,
                  playlists: result.data.items.map(item => ({
                      name: item.name,
                      image: item.images[0].url,
                      playlistId: item.id
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