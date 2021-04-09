import React, { useState } from 'react';
import Dropdown from './Dropdown.jsx';

const NewMusicArtists = (props) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    return (
        <div>
            <div id={props.artistInfo.artistId} onClick={
                (e) => {
                    setHasBeenClicked(!hasBeenClicked);
                    props.handleArtistClick(e);
                }
            }>
                <img style={{ maxHeight: '75px', maxWidth: '75px', borderRadius: '10px' }} src={props.artistInfo.image}></img>
                <p style={{color: "#d7dee1"}}>{props.artistInfo.name}</p>
            </div>
            <div>
                {hasBeenClicked && <Dropdown options={props.artistInfo.genres} getSelectedGenre={(e) => props.getSelectedGenre(e)} />}
            </div>
            <br />
        </div>
    )
}

export default NewMusicArtists