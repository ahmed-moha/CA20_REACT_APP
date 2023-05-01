import React from 'react'

function Avatar({ imageUrl }) {
    return (
        <div>
            <img width={200} height={200} src={imageUrl} alt="sample image" />
        </div>
    )
}

export default Avatar
