import React from 'react';
import Cards from '../../components/cards';
import { localData } from '../../assets/localData';
import style from "./style.module.scss";

const Education = () => {
    return (
        <div className={style.education}>
            <h2 className={style.h2}>Что даст тебе обучение?</h2>
            <section className={style.education__block}>
                {
                    localData.education.map((item) => {
                        return <Cards
                            key={item.id}
                            imgPath={item.img}
                            text={item.text}
                        />
                    })
                }
            </section>
        </div>
    );
};

export default Education;