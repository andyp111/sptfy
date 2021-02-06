import React from "react";


const Player = (props) => {
//   const backgroundStyles = {
//     backgroundImage:`url(${props.item.album.images[0].url})`,
//   };
  
//   const progressBarStyles = {
//     width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
//   };
  
  return (
    <div className="Player">
      <iframe src="https://open.spotify.com/embed/track/5ZLCyAR6Ti5ueOiPGl41XH" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}
export default Player;