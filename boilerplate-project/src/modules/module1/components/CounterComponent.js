import React from 'react';

export default class CounterComponent extends React.Component {
    state = {
        value: 0,
    };

    onCounterIncrease = (e) => {
        this.setState({
            value: parseInt(this.state.value, 10) + 1,
        });
    };

    onCounterDecrease = (e) => {
        this.setState({
            value: parseInt(this.state.value, 10) - 1,
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={(e) => {
                    this.onCounterIncrease(e);
                }}>Add</button>
                <button onClick={(e) => {
                    this.onCounterDecrease(e);
                }}>Substract</button>
            </div>
        )
    };
}