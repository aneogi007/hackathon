import React from 'react';
import './Sidebar.css';
import FriendOptions from './FriendOptions'

function Sidebar() {
    return(
        <div className="sidebar">
            <h1>friends</h1> 
            <FriendOptions title="Friends" />
            <FriendOptions title="Friends" />
            <FriendOptions title="Friends" />

        </div>
    );
}
 
export default Sidebar