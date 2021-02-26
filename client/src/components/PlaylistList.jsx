import React from 'react';
import { connect } from 'react-redux';
import Playlists from './Playlists.jsx';
import { fetchPlaylistInfo } from '../redux/actions/fetchUserPlaylists.js'


class PlaylistList extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylistInfo()
    }

    render() {
        console.log(this.props.playlists.playlists)
        return (
            <div className = "container">
            {this.props.playlists.playlists.map((name, index) => {
                return (
                    <div className="playlist-main" key={index}>
                        <Playlists playlist={name}/>
                    </div>
                )
            })}
        </div>
        )
    }
}

const mapStateToProps = (state) => ({playlists: state.playlists})
export default connect(mapStateToProps, { fetchPlaylistInfo })(PlaylistList)