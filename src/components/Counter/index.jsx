import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((state, props) => {
            const { count } = state;
            return {
                count: count + 1,
            };
        });
    };

    decrement = () => {
        this.setState((state, props) => {
            const { count } = state;
            if (count <= 0) {
                return;
            }
            return {
                count: count - 1,
            };
        });
    };

    render() {
        const { count } = this.state;
        return (
            <>
                <h1>{count}</h1>
                <button onClick={this.increment}>ADD</button>
                <button onClick={this.decrement}>DELETE</button>
            </>
        );
    }
}

export default Counter;
