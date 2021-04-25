import React from 'react';
import faker from 'faker';

import User from './User';
import FollowCard from './FollowCard';

const App = () => {
    return (
        <div>
            <User username="John" url={faker.image.avatar()} />
            <User username="Alex" url={faker.image.avatar()} />
            <User username="Sonia" url={faker.image.avatar()} />
            <FollowCard>
                <User username="Sachin" url={faker.image.avatar()} />
            </FollowCard>
            <FollowCard>
                Are you sure?
            </FollowCard>
        </div>
    );
}

export default App;