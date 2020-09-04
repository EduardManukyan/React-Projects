import React from "react";
import "./Button.css";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1,
            disableDecreaseButton: true,
            disableIncreaseButton: false,
            maxValue: 20,
            minValue: 0,
        };
    }

    handleInc = () => {
        if (this.state.count + this.state.step <= this.state.maxValue) {
            this.setState((prevState) => ({
                count: prevState.count + prevState.step,
                disableIncreaseButton: false,
                disableDecreaseButton: false,
            }));
        } else {
            this.setState((prevState) => ({
                count: this.state.maxValue,
                disableIncreaseButton: true,
                disableDecreaseButton: false,
            }));
        }
    };

    handleDec = () => {
        if (this.state.count - this.state.step >= this.state.minValue) {
            this.setState((prevState) => ({
                count: prevState.count - prevState.step,
                disableDecreaseButton: false,
                disableIncreaseButton: false,
            }));
        } else {
            this.setState((prevState) => ({
                count: this.state.minValue,
                disableDecreaseButton: true,
                disableIncreaseButton: false,
            }));
        }
    };

    handleStepBy = (e) => {
        const normalizedValue = Number(e.target.value);
        if (Number.isNaN(normalizedValue)) {
            throw new Error("Input should be a number!");
        } else {
            this.setState({
                step: normalizedValue,
            });
        }
    };

    handleMax = (number) => {
        const parsedNumber = +number;
        let disableMax = parsedNumber < this.state.count;
        if (Number.isNaN(parsedNumber)) {
            throw new Error("Input should be a number!");
        } else {
            this.setState({
                maxValue: parsedNumber,
                disableIncreaseButton: disableMax,
            });
        }
    };

    handleMin = (number) => {
        const parsedNumber = +number;
        let disableMin = parsedNumber > this.state.count;
        if (Number.isNaN(parsedNumber)) {
            throw new Error("Input should be a number!");
        } else {
            this.setState({
                minValue: parsedNumber,
                disableDecreaseButton: disableMin,
            });
        }
    };

    handleReset = () => {
        this.setState({
            count: (this.state.count = 0),
        });
    };

    render() {
        let fontSize = Math.floor(this.state.count + 1 / this.state.maxValue) * 2  + 15;
        fontSize = Math.min(fontSize,89);
        return (
            <div className="container">
                <div className='menu'>
                    <button
                        className="but"
                        disabled={this.state.disableIncreaseButton}
                        onClick={this.handleInc}
                    >+
                    </button>
                    <button
                        className="but"
                        disabled={this.state.disableDecreaseButton}
                        onClick={this.handleDec}
                    >-
                    </button>
                    <button className="but" onClick={this.handleReset}>
                        Reset
                    </button>
                </div>
                <div className='counter-container' style={{fontSize: fontSize}}>
                    <div className='counter-container__item'>{this.state.count}</div>
                </div>
                <form className='form'>
                    <div>
                        <label htmlFor="addMax">Max value</label>
                        <input
                            id="addMax"
                            className="inputStyle"
                            onChange={(event) => {
                                this.handleMax(event.target.value);
                            }}
                            placeholder="Max Value"
                        />
                    </div>
                    <div>
                        <label htmlFor="addMin">Min value</label>
                        <input
                            id="addMin"
                            className="inputStyle"
                            onChange={(event) => {
                                this.handleMin(event.target.value);
                            }}
                            placeholder="Min Value"
                        />
                    </div>
                    <div>
                        <label htmlFor="addStep">Step</label>
                        <input
                            id="addStep"
                            className="inputStyle"
                            onChange={this.handleStepBy}
                            placeholder="Add by step"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
