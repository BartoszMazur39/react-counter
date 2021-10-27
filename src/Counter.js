import React, {Component} from 'react';
import './Counter.css';
 
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

class Counter extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 0
        };
    }
 
    changeValue = (action) => { // ES6 method
 
        this.setState((prevState, prevProps) => {
             
            let currentCounterValue = prevState.counterValue;
 
            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }
 
            return({
                counterValue: currentCounterValue
            });
        });
    }
 
    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }
    
    setStep = (input) => {
        this.setState((prevState) => {

            let value = 1;
            if (input.value !== "") {
                value = parseInt(input.value);
            }

            if (value <= 0)
                value = 1;

            return ({
                stepValue: value
            })
        });
    }

    render() {
 
        let clockElement = '';
 
        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }
 
        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step stepValue={this.state.stepValue} changeStepValue={this.setStep} /> 
                {clockElement}
            </div>
        );
    }
}
 
export default Counter;