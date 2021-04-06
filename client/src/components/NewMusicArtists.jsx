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
                {props.artistInfo.name}
            </div>
            <div>
                {hasBeenClicked && <Dropdown options={props.artistInfo.genres} getSelectedGenre={(e) => props.getSelectedGenre(e)}/>}
            </div>
        </div>
    )
}

export default NewMusicArtists