import React from 'react';
import './Tacos.css';


const Tacos = (props) => (
    <div className="Tacos">
        {props.tacoNo.map((taco, idx) =>
            <img 
                height="100"
                src={props.tacoIdx === idx ? "https://media.istockphoto.com/photos/taco-with-a-bite-missing-picture-id158196293" : "https://www.tacobueno.com/assets/food/bueno_values/party%20taco%20seamless%20no%20tomatoes.png?v=1"}
                alt=""
                onClick={() => props.handleTacoSelection(idx)}
            />
        )}
    </div>
)

export default Tacos;