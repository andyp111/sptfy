import React from 'react';
import TopArtist from './TopArtist.jsx'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            setIsShown: false
        }
        this.onImageHover = this.onImageHover.bind(this);
        this.onImageLeave = this.onImageLeave.bind(this);
    }

    onImageHover(e) {
        this.setState({
            setIsShown: true
        })
    }

    onImageLeave(e) {
        this.setState({
            setIsShown: false
        })
    }


    render() {
        return (
            <div className="dashboard">
                <div className="top-tracks">
                    <h1>Your Top Tracks!</h1>
                    {this.props.topTracks.map((item, index) => {
                        return (
                            <div className="tracks" key={index}>
                               <p className="track-p">{index + 1}. {item.track} - {item.artist[0]}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="top-artist">
                    {this.props.topArtists.map((artist, index) => {
                        return (
                            <TopArtist artist={artist}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard

//add dashboard component in nav? 