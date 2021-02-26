import React from 'react'
import axios from 'axios'
import store from '../redux/store/store.js'
import SongsList from './SongsList.jsx'
import Modal from 'react-modal'

Modal.setAppElement('#app');

class Playlists extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songList: [],
            clicked: false,
            accessToken: store.getState().userInfo.accessToken,
            imageHovered: false,
            modalIsOpen: false

        }

        this.onImageClick = this.onImageClick.bind(this);
        this.onPlaylistClick = this.onPlaylistClick.bind(this);
        this.onImageHover = this.onImageHover.bind(this);
        this.onImageLeave = this.onImageLeave.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        
    };

    onImageHover(e) {
        this.setState({
            imageHovered: true
        })
    }

    onImageLeave() {
        this.setState({
            imageHovered: false
        })
    }

    onPlaylistClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    onModalClick() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            clicked: false

        })
    }

    onImageClick() {
        this.setState({
            clicked: !this.state.clicked
        }, () => console.log(this.state.clicked))

        axios.get(`https://api.spotify.com/v1/playlists/${this.props.playlist.playlistId}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + this.state.accessToken
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
       
        
        //<iframe src="https://open.spotify.com/embed/playlist/1jdZzSyGkdMCjHrhFBGJBq" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    }

    render() {
        return (
            <div className="playlists">
                <h1>{this.props.playlist.name}</h1>
                <br />
                {this.state.clicked ? 
                    <div className="playlist-songs">
                        <SongsList songs={this.state.songList} />
                        <span onClick={this.onPlaylistClick}>Go Back</span>
                    </div> 
                : <div>
                {this.state.imageHovered &&
                    <div>
                        {this.state.modalIsOpen ? null : <span onClick={this.onImageClick} onMouseEnter={this.onImageHover} onMouseLeave={this.onImageLeave} className="view-all-songs">View All Songs </span>}
                        {!this.state.modalIsOpen ? <span onClick={this.onModalClick} onMouseEnter={this.onImageHover} className="play-songs">Play!</span> : null}
                        <Modal 
                            className="playlist-modal" 
                            overlayClassName="playlist-modal-overlay"
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.onModalClick}
                        >
                            <iframe src={`https://open.spotify.com/embed/playlist/${this.props.playlist.playlistId}`} width="500" height="700" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            <button onClick={this.onModalClick}>
                                Close
                            </button>
                        </Modal>
                        
                    </div>}
                    {this.state.imageHovered ?
                        <img style={{opacity: 0.5}} className="playlist-img" onMouseEnter={this.onImageHover} onMouseLeave={this.onImageLeave} src={this.props.playlist.image} />
                        : <img className="playlist-img" onMouseEnter={this.onImageHover} onMouseLeave={this.onImageLeave} src={this.props.playlist.image} /> } 
                </div>}
            </div>
        )
    }
}


export default Playlists
//instead of onMouse effects render component but change opacity depending on hover