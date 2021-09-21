import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.timeoutId = null;
        this.state = {
            isRunning: false,
            time: new Date(0, 0, 0, 0, 0, 0, 0),
        };
    }

    tick = () => {
        this.setState((state, props) => {
            const { time } = state;
            const newTime = new Date(time.getTime());
            newTime.setSeconds(newTime.getSeconds() + 1);
            return {
                time: newTime,
            };
        });
    };

    startTimer = () => this.setState({ isRunning: true });

    stopTimer = () => {
        this.setState({ isRunning: false });
    };

    clearTimer = () => {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
    };

    resetTimer = () => {
        this.clearTimer();
        this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    };

    //After first render
    componentDidMount() {
        this.startTimer();
    }

    //After each render
    componentDidUpdate() {
        const { isRunning } = this.state;
        this.clearTimer();

        if (isRunning) {
            this.timeoutId = setTimeout(this.tick, 1000);
        }
    }

    //Before unmount
    componentWillUnmount() {
        this.clearTimer();
    }

    render() {
        const { isRunning, time } = this.state;
        return (
            <article className={styles.container}>
                <h1 className={styles.currentTime}>
                    {time.toLocaleTimeString('it-IT')}
                </h1>
                <div className={styles.controls}>
                    {isRunning ? (
                        <button className={styles.btn} onClick={this.stopTimer}>
                            STOP
                        </button>
                    ) : (
                        <button
                            className={styles.btn}
                            onClick={this.startTimer}
                        >
                            START
                        </button>
                    )}
                    <button className={styles.btn} onClick={this.resetTimer}>
                        RESET
                    </button>
                </div>
            </article>
        );
    }
}

export default StopWatch;
