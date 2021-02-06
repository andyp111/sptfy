import React from 'react'
import axios from 'axios'

class Songs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let artist = this.props.artist[0]
        if (this.props.artist.length > 1) {
            artist = this.props.artist.join(', ')
        }
        return (
            <div>
                {this.props.title} - {artist}
            </div>
        )
    }
}

export default Songs