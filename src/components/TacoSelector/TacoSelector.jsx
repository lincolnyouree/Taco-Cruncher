import React from 'react';
import './TacoSelector.css';

const TacoSelector = (props) => (
    <div className="TacoSelector">
        {props.tacoNo.map((taco, idx) =>
            <button
            className={props.tacoIdx === idx ? 'selected' : 'color'}
            onClick = {() => props.handleTacoSelection(idx)}
            >
                {props.tacoIdx === idx ? `Taco ${idx+1} Selected` : `Select Taco ${idx+1}`}
            </button>
        )}
    </div>
)

export default TacoSelector;