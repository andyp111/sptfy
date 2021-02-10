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
                                {item.track} - {item.artist[0]}
                            </div>
                        )
                    })}
                </div>
                <div className="top-artist">
                    {this.props.topArtists.map((artist, index) => {
                        return (
                            <div className="artist" key={index}>
                                <img className="artist-img" src={artist.image}/>
                                {/* <p>{artist.name}</p> */}
                            </div>
                        )
                    })}
                </div>
                <div className="user-image">
                    <img src={this.props.userImage}/>
                </div>
                <p className="followers">{this.props.followers}</p>
            </div>
        )
    }
}

export default Dashboard