import React from 'react'
import Friend from '../components/friend';
import './friends.css'

const Friends = (props) => (
    <div className="Friends">
        <h3>Lista de Amigos</h3>
        
        <div>
            {props.data.map((friend, index) => {
                return <Friend key={index} data={friend}/>
            })}
        </div>
    </div>
)

export default Friends