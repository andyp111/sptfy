import axios from "axios";
import { GET_USER_INFO, USER_ERROR } from '../types';
import queryString from 'query-string';

export const fetchUserInfo = () => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    return function(dispatch) {
        return axios.get('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': 'Bearer ' + accessToken
            }
          })
          .then((result) => {
              dispatch({
                  type: GET_USER_INFO,
                  username: result.data.display_name,
                  userImg: result.data.images[0].url,
                  userFollowers: result.data.followers.total,
                  accessToken: accessToken
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

