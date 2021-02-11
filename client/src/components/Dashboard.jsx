import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dashboard">
                <div className="top-tracks">
                    <h1>Your Top Tracks!</h1>
                    {this.props.topTracks.map((item, index) => {
                        return (
                            <div className="tracks" key={index}>
                               {index + 1}. {item.track} - {item.artist[0]}
                            </div>
                        )
                    })}
                </div>
                <div className="top-artist">
                    {this.props.topArtists.map((artist, index) => {
                        return (
                            <div className="artist" key={index}>
                                <span className="artist-img-name">{artist.name}</span>
                                <img className="artist-img" src={artist.image}></img>
                            </div>
                        )
                    })}
                </div>
                <p className="followers">{this.props.followers}</p>
            </div>
        )
    }
}

export default Dashboard

//add dashboard component in nav? 