import React from 'react'
import logo from '../../../images/logo.png';
import './related-layout.css'
import FriendsContainer from '../../sidebar/containers/friends-container';
function RelatedLayout(props) {
    return(
        <div className="Related">
            <img src={logo} width={260} />
            <FriendsContainer/>
        </div>
    )
}

export default RelatedLayout;