import React from 'react'
import axios from 'axios'
import SongsList from './SongsList.jsx'



class Playlists extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songList: [],
            clicked: false
        }

        this.onImageClick = this.onImageClick.bind(this);
        this.onPlaylistClick = this.onPlaylistClick.bind(this);
        this.myRef = React.createRef();
    };

    

    onPlaylistClick() {
        const node = this.myRef.current;
        console.log(node);
        this.setState({
            clicked: !this.state.clicked
        })
    }

    onImageClick() {
        this.setState({
            clicked: !this.state.clicked
        }, () => console.log(this.state.clicked))

        axios.get(`https://api.spotify.com/v1/playlists/${this.props.playlist.playlistId}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + this.props.access
            }
        })
        .then(result => this.setState({
            songList: result.data.items.map(item => ({
                title: item.track.name,
                songId: item.track.id,
                trackUri: item.track.uri,
                artist: item.track.artists.map(artistName => {
                    return artistName.name
                })
            }))
        }))
       
        
        //<iframe src="https://open.spotify.com/embed/playlist/1jdZzSyGkdMCjHrhFBGJBq" 
    }

    render() {
        return (
            <div className="playlists">
                <h1>{this.props.playlist.name}</h1>
                <br />
                {this.state.clicked ? 
                    <div className="playlist-songs" ref={this.myRef} onClick={this.onPlaylistClick}>
                        <SongsList songs={this.state.songList} />
                    </div> 
                : <img onClick={this.onImageClick} src={this.props.playlist.image} />}
            </div>
        )
    }
}


export default Playlists