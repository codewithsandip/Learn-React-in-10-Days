import React from 'react';

const DigitalClock = (props) => {

    let time = null;
    let timeStr = 'clock';

    setInterval(() => {
        time = new Date();
        timeStr = `
                ${time.getHours()}:
                ${time.getMinutes()}:
                ${time.getSeconds()}
            `;

            console.log(timeStr);
    }, 1000);

    return <div>{timeStr}</div>
}

export default DigitalClock;