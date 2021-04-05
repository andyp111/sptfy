import React from 'react';
import axios from 'axios';
import store from '../redux/store/store.js';

class NewMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: store.getState().userInfo.accessToken
        }

        this.getTopArtists = this.getTopArtists.bind(this);
    }

    componentDidMount() {
        this.getTopArtists();
    }

    getTopArtists() {
        axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                'Authorization': 'Bearer ' + this.state.accessToken
            }
        })
        .then((result) => {
            console.log(result.data);
        })
    }

    render() {
        console.log(this.state.accessToken);
        return (
            <div>This is the new music page</div>
        )
    }
}


export default NewMusic;