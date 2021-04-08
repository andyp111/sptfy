import React, { useEffect } from 'react';

const NewMusicRecommended = (props) => {
    console.log(props)
    console.log(props.recommended)

    return (
        <div className="recommended-container">
            {props.recommended.map((info) => {
                return (
                    <div className="recommended-single">
                        <p>{info.artist}</p>
                        <br />
                        <img style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '10px' }} src={info.image}></img>
                        <br />
                        <p>{info.albumName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default NewMusicRecommended;