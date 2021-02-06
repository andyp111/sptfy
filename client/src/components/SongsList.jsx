import React from 'react'
import Songs from './Songs.jsx'

const SongsList = (props) => {
    return (
        <table>
            <tbody>
                {props.songs.map(item => {
                    return (
                        <Songs title={item.title} artist={item.artist} songId={item.songId}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SongsList