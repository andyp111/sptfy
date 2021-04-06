import React, { useEffect } from 'react';

const NewMusicRecommended = (props) => {
    console.log(props)
    console.log(props.recommended)

    return (
        <div>
            {props.recommended.map((info) => {
                return (
                    <div>
                        {info.artist}
                        {info.albumName}
                        <img style={{maxWidth: '100px', maxHeight: '100px', borderRadius: '10px'}} src={info.image}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default NewMusicRecommended;