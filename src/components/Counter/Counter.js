import React from "react";
import "./Counter.scss";
import { LoginContext, ThemeContext } from "../../App";

const Counter = (props) =>{

    //Contexts
    const theme = React.useContext(ThemeContext);
    const login = React.useContext(LoginContext);

    return (
        <>
        {login.currentUsername ? 
            <div style={{ background: theme.background, color: theme.fontColor }}>
                <h2>Contador {props.name}:</h2>

                <p>Valor actual: {props.counter}</p>
                <button onClick={props.handleDecrement}>Decrementar</button>
                <button onClick={props.handleIncrement}>Aumentar</button>
            </div> : 
            <div style={{ background: theme.background, color: theme.fontColor }}>
                <p>Debes hacer login para ver el contador</p>
            </div>
        }
        </>
    );
}

export default Counter;