import React from 'react';
import Playlists from './Playlists.jsx';

const PlaylistList = (props) => {
    
    return (
        <div className = "container">
            {props.playlistInfo.map((name, index) => {
                return (
                    <div className="playlist-main" key={index}>
                        <Playlists playlist={name} access={props.accessToken} />
                    </div>
                )
            })}
        </div>
    )
}

export default PlaylistList