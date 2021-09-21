import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 0,
        };
    }

    increment = () => {
        this.setState((state, props) => {
            const { count, step } = state;
            return { count: count + step };
        });
    };

    decrement = () => {
        this.setState((state, props) => {
            const { count, step } = state;
            return count <= 0 ? null : { count: count - step };
        });
    };

    editStep = ({ target: { value } }) => this.setState({ step: Number(value) });

    render() {
        const { count, step } = this.state;
        return (
            <>
                <h1>Current step: {step}</h1>
                <input type='number' name='number' value={step} onChange={this.editStep} />
                <h1>Counter: {count}</h1>
                <button onClick={this.increment}>ADD</button>
                <button onClick={this.decrement}>DELETE</button>
            </>
        );
    }
}

export default Counter;
