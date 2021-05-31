import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="card" style={{width: '150px'}}>
            <div className="image">
                <img src={user.avatar_url} alt={user.name} />
            </div>
            <div className="content">
                <div className="header">{user.name}</div>
            </div>
        </div>
    );
}

export default Card;