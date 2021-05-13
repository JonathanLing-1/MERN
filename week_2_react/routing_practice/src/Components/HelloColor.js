import React from 'react'

const HelloColor = props => {

    return (
        <div>
            <p style={{backgroundColor:props.background, color:props.text}}>Hello</p>
        </div>
    )
}

export default HelloColor
