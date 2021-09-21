import React from 'react';
import styles from './MyInfo.module.scss';

const MainContent = () => {
    return (
        <main>
            <ol className={styles.list}>
                <li>I want to visit Canada</li>
                <li>Great Britan</li>
                <li>Norvegian</li>
            </ol>
        </main>
    );
};

export default MainContent;
