import React from 'react'

const Playlists = (props) => {
    console.log(props.names)
    return (
        <div>
            {props.names.map((name, index) => {
                return (
                    <div key={index}>
                        {name.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Playlists