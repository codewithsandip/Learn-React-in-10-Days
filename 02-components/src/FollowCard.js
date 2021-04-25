import React from 'react';

import './FollowCard.css';

const FollowCard = (props) => {
    return (
        <div className="follow-card">
            {props.children}
            <div className="follow-card--btn">
                <button>Follow</button>
            </div>
        </div>
    );
}

export default FollowCard;