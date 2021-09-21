import React from 'react';
import styles from './MyInfo.module.scss';

const Header = () => {
    return (
        <>
            <h1 className={styles.heading}>Umar Khalilov</h1>
            <p className={styles.about}>
                I'm beginner software developer, which will to become a greatest
                developer.
            </p>
        </>
    );
};

export default Header;
