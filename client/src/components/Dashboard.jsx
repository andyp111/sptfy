import React from 'react';
import TopArtist from './TopArtist.jsx'
import { fetchUserTopTracks } from '../redux/actions/fetchUserTopTracks.js'
import { fetchUserTopArtists } from '../redux/actions/fetchUserTopArtists.js'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            setIsShown: false
        }
    }

    // async componentWillReceiveProps(nextProps) {
    //     if (this.props.topArtists !== nextProps.topArtists) {
    //         await this.props.fetchUserTopArtists();
    //     }
    //     if (this.props.topTracks !== nextProps.topTracks) {
    //         await this.props.fetchUserTopTracks();
    //     }
    //     console.log(`${nextProps}, hello`);
    // }   
    componentWillMount() {
        this.props.fetchUserTopArtists();
        this.props.fetchUserTopTracks();
    }

    render() {
        console.log(this.props)
        return (
            <div className="dashboard">
                <div className="top-tracks">
                    <h1 className="top-tracks-title">Your Top Tracks!</h1>
                    {this.props.topTracks.topTracks.map((item, index) => {
                        return (
                            <div className="tracks" key={index}>
                               <p className="track-p">{index + 1}. {item.track} - {item.artist[0]}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1 style={{color: '#d7dee1', position: 'relative', left: '16rem'}}>Your Top Artists!</h1>
                    <div className="top-artist">
                        {this.props.topArtists.topArtists.map((artist, index) => {
                            return (
                                <TopArtist artist={artist}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({topTracks: state.topTracks, topArtists: state.topArtists})
const mapDispatchToProps = {
    fetchUserTopTracks,
    fetchUserTopArtists
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

//is there a way to resize the image?
