import React from 'react';

import './User.css'

const User = (props) => {
    return (
        <div className="user">
            <div className="user--image">
                <img src={props.url} />
            </div>
            <div className="user--name">
                {props.username}
            </div>
        </div>
    );
}

export default User;