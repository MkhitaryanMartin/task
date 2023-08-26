import React, { useState } from 'react';
import Button from '../../components/button';
import man from "../../assets/img/MAN.png"
import style from "./style.module.scss"
import { Modal } from '../../components/modal';

const Home = () => {
    const [visibele, setVisible] = useState()

    const handleClose = () => {
        setVisible(false)
    }
    const handleOpen = () => {
        setVisible(true)
    }
    return (
        <div className={style.home}>
            <section className={style["home__first-block"]}>
                <h2>Не упусти <br />  возможность войти <br /> <span>в прибыльную нишу</span></h2>
            </section>
            <section className={style["home__second-block"]}>
                <img src={man} alt='poster' />
            </section>
            <section className={style["home__last-block"]}>
                <p>Получи все нужные навыки для заработка <br /> на NFT всего за 28 дней!</p>
                <Button text='Начать зарабатывать на NFT' variant='normal' onclick={handleOpen} />
            </section>
            {
                visibele ? <Modal
                    title="Начни прямо сейчас!"
                    content="Получи все нужные навыки для заработка на NFT всего за 28 дней!"
                    isVisible={visibele}
                    onClose={handleClose}
                >
                    <input type='email' placeholder='Ваш email' className={style.email} />
                    <Button text='Оплатить' variant='send' onclick={handleClose} />
                </Modal> : null
            }
        </div>
    );
};

export default Home;