import React from 'react'
import Songs from './Songs.jsx'

const SongsList = (props) => {
    return (
        <div className="songs-table">
                {props.songs.map(item => {
                    return (
                        <div className="songs-container">
                            <Songs title={item.title} artist={item.artist} songId={item.songId}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default SongsList