import React from 'react';
import axios from 'axios';
import store from '../redux/store/store.js';
import NewMusicArtists from './NewMusicArtists.jsx';
import NewMusicRecommended from './NewMusicRecommended.jsx';

class NewMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: store.getState().userInfo.accessToken,
            topArtists: [],
            selectedArtist: '',
            selectedGenre: '',
            recommendedInfo: []
        }

        this.getTopArtists = this.getTopArtists.bind(this);
        this.getRecommendedArtists = this.getRecommendedArtists.bind(this);
        this.getSelectedArtist = this.getSelectedArtist.bind(this);
        this.getSelectedGenre = this.getSelectedGenre.bind(this);
    }

    componentDidMount() {
        this.getTopArtists();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.recommendedInfo !== this.state.recommendedInfo) {
            console.log('state has changed')
        }
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

    getRecommendedArtists(e) {
        e.preventDefault();

        axios.get(`https://api.spotify.com/v1/recommendations?limit=3&seed_artists=${this.state.selectedArtist}&seed_genres=${this.state.selectedGenre}`, {
            headers: {
                'Authorization': 'Bearer ' + this.state.accessToken,
            }
        })
            .then((result) => {
                console.log(result.data)
                this.setState({
                    recommendedInfo: result.data.tracks.map((item) => ({
                        externalUrl: item.external_urls.spotify,
                        artist: item.artists[0].name,
                        albumName: item.name,
                        image: item.album.images[0].url,
                        type: item.type,
                    }))
                }, () => console.log(this.state.recommendedInfo))
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
                            <NewMusicArtists artistInfo={artistInfo} handleArtistClick={this.getSelectedArtist} getSelectedGenre={this.getSelectedGenre} />
                        )
                    })}
                </div>
                <div className="rec-selector">
                    <p className="rec-selector-p">Click on one of your top artists and choose a genre!</p>
                    <br />
                    <button onClick={(e) => this.getRecommendedArtists(e)}>See Rec</button>
                </div>
                <div className="recommended">
                    {this.state.recommendedInfo.length > 0 ? <NewMusicRecommended recommended={this.state.recommendedInfo} /> : null}
                </div>
            </div>
        )
    }
}


export default NewMusic;