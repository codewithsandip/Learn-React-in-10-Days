import React from 'react';

const Reminder = props => {
    return <div>{`${props.data.time}:${props.data.task}`}</div>;
}

export default Reminder;