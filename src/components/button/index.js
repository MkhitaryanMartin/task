import React from 'react';
import style from "./style.module.scss";

const Button = ({
    text="",
    variant="",
    disabled= false,
    onclick,
}) => {
   
    return (
        <button 
        className={style[variant]}
        onClick={onclick}
        >
            {text}
        </button>
    );
};

export default Button;