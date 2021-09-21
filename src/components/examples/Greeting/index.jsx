import React from 'react';

const Greeting = () => {
    const date = new Date().getHours();
    const styles = {
        backgroundColor: '#FF2D00',
        width: '300px',
        fontSize: 30,
    };

    let timeOfDay;
    if (date < 12) {
        timeOfDay = 'Morning';
        styles.color = 'green';
    } else if (date > 12 && date < 17) {
        timeOfDay = 'Afternoon';
        styles.color = 'yellow';
    } else if (date > 17 && date < 22) {
        timeOfDay = 'Evening';
        styles.color = 'blue';
    } else {
        timeOfDay = 'Night';
        styles.color = 'red';
    }

    return <h1 style={styles}>Good {timeOfDay} </h1>;
};

export default Greeting;
