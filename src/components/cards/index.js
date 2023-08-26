import React from 'react';
import style from "./style.module.scss";

const Cards = ({
    text="",
    imgPath="",
}) => {
    return (
        <div className={style.cards}>
            <div className={style["cards__block"]}></div>
            <div className={style["cards__block-small"]}>
                <img src={imgPath} alt='smail'/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Cards;