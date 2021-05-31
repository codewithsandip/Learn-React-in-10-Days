import React from 'react';

import Card from './Card';

const CardList = ({ users = [] }) => {

    const styles = {
        padding: '10px'
    }

    return (
        <div className="ui link cards" style={styles}>
            {
                users.map((user) => <Card key={user.id} 
                    user={user} />)
            }
        </div>
    )
}

export default CardList;