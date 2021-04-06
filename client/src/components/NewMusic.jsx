import React from 'react';
import axios from 'axios';
import store from '../redux/store/store.js';
import NewMusicArtists from './NewMusicArtists.jsx';

class NewMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: store.getState().userInfo.accessToken,
            topArtists: [],
            selectedArtist: '',
            selectedGenre: ''
        }

        this.getTopArtists = this.getTopArtists.bind(this);
        this.getRecommendedArtists = this.getRecommendedArtists.bind(this);
        this.getSelectedArtist = this.getSelectedArtist.bind(this);
        this.getSelectedGenre = this.getSelectedGenre.bind(this);
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
                this.setState({
                    topArtists: result.data.items.map(item => ({
                        name: item.name,
                        genres: item.genres.map((genre) => {
                            return genre;
                        }),
                        artistId: item.id,
                        image: item.images[1].url
                    }))
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getSelectedArtist(e) {
        this.setState({
            selectedArtist: e.currentTarget.id
        })
    }

    getSelectedGenre(e) {
        this.setState({
            selectedGenre: e.target.value
        }, () => console.log(this.state.selectedGenre))
    } 

    getRecommendedArtists() {
        axios.get(`https://api.spotify.com/v1/recommendations?limit=3&seed_artists=${this.state.selectedArtist}&seed_genres=${this.state.selectedGenre}`, {
            headers: {
                'Authorization': 'Bearer ' + this.state.accessToken,
            }
        })
            .then((result) => {
                console.log(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    render() {

        return (
            <div className="newMusicContainer">
                <div className="artists-container">
                    {this.state.topArtists.map((artistInfo) => {
                        return (
                            <NewMusicArtists artistInfo={artistInfo} handleArtistClick={this.getSelectedArtist} getSelectedGenre={this.getSelectedGenre}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default NewMusic;