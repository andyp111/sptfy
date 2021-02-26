import React, {useState} from 'react'

const TopArtist = (props) => {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="artist">
            {isShown ? <span onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}className="artist-img-name">{props.artist.name}</span> : null}
            {isShown ? <img style={{opacity: 0.5}} className="artist-img" 
                onMouseEnter={() => setIsShown(true)} 
                onMouseLeave={() => setIsShown(false)}
                src={props.artist.image}>
            </img>
            : <img className="artist-img" 
                onMouseEnter={() => setIsShown(true)} 
                onMouseLeave={() => setIsShown(false)}
                src={props.artist.image}></img>
            }
        </div>
    )
}

export default TopArtist