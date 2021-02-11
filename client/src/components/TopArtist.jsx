import React, {useState} from 'react'

const TopArtist = (props) => {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="artist">
            {isShown ? <span className="artist-img-name">{props.artist.name}</span> : null}
            <img className="artist-img" 
                onMouseEnter={() => setIsShown(true)} 
                onMouseLeave={() => setIsShown(false)}
                src={props.artist.image}>
            </img>
        </div>
    )
}

export default TopArtist