import { GET_USER_INFO } from '../types.js';

const initialState = { 
    username: '',
    userFollowers: '',
    userImg: '',
    loading: true,
    access_token: ''
}

const getUserInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                username: action.username,
                userFollowers: action.userFollowers,
                userImg: action.userImg,
                loading: false,
                accessToken: action.accessToken
            }
            default: return state
    }
}

export default getUserInfoReducer