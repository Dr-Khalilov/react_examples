import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 5,
            isAdd: true,
        };
    }

    increment = () => this.setState(({ count, step }) => ({ count: count + step }));

    decrement = () => this.setState(({ count, step }) => count <= 0 ? null : { count: count - step });

    editStep = ({ target: { value } }) => this.setState({ step: Number(value) });

    changeMode = () => this.setState(({ isAdd }) => ({ isAdd: !isAdd }));

    render() {
        const { count, step, isAdd } = this.state;
        return (
            <>
                <h1>Current step: {step}</h1>
                <input type='number' name='number' value={step} onChange={this.editStep} placeholder='Number' />
                <h1>Counter: {count}</h1>
                <button onClick={this.changeMode}>Change Mode</button>
                &nbsp;
                {isAdd ? <button onClick={this.increment}>ADD</button> :
                    <button onClick={this.decrement}>Subtract</button>}
            </>
        );
    }
}