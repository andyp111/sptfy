import React, { useEffect } from 'react';

const NewMusicRecommended = (props) => {
    console.log(props)
    console.log(props.recommended)

    return (
        <div>
            {props.recommended[0].artist}
        </div>
    )
}

export default NewMusicRecommended;