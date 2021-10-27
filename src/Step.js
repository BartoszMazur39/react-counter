import React from "react";
import './Step.css';

function Step(props) {
    let inputStep = "";

    return(
        <div className="step">
            Krok:
            <input  value={props.stepValue} type="number" ref={(data) => { inputStep= data; }}  onChange={() => {props.changeStepValue(inputStep);}} />
        </div>
    );
}

export default Step;