import React from 'react';
import './PersonalProfile.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Playbar from './Playbar'

function PersonalProfile({ spotify }) {
    return (
        <div className="personalProfile">
            <div className="personalProfile_body">
                {/* Sidebar */}
                <Playbar spotify={spotify} />
                
                {/* Body */}
                <Body />
            </div>

            {/* Foot */}
            

        </div>
    )
}

export default PersonalProfile