import React from 'react'



class Playlists extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songList: [],
            clicked: false
        }

        this.onImageClick = this.onImageClick.bind(this);
    };


    onImageClick() {
        this.setState({
            clicked: !this.state.clicked
        }, () => console.log(this.state.clicked))
    }

    render() {
        return (
            <div>
                <img onClick={this.onImageClick} src={this.props.playlist.image} />
            </div>
        )
    }
}

export default Playlists