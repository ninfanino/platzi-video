import React from 'react'
import './friend.css'

const Friend = (props) => (
    <div className="Friend">
        <img className="FriendImage" src={props.data.picture.thumbnail} alt="" />
        <p className="FriendName">
            {props.data.name.first} {props.data.name.last}
        </p>
    </div>
)

export default Friend