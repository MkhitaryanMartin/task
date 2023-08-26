import React from 'react';
import { NavLink } from 'react-router-dom';
import { localData } from '../../../assets/localData';
import logo from "../../../assets/img/logo.png";
import NavItem from './navItem';
import style from "../style.module.scss"
import Menu from '../../svg/menu';
import CloseIcon from '../../svg/close';

const Nav = ({
    open = false,
    setOpen,
    setClose
}) => {
    return (
        <nav className={open ? style['nav-container_show'] : style['nav-container']}>
            <div className={style["nav-container__block"]}>
                <NavLink to="/" className={style.logo}>
                    <img src={logo} alt='logo' />
                </NavLink>
                <NavItem
                    data={localData.link}
                    className={style['nav-block__item']}
                />
               {
                open ? <CloseIcon onClick={setClose}  classname={style.menu}/> :  <Menu
                classname={style.menu}
                onClick={setOpen}
            />
               }
            </div>
            {
                open ? <NavItem
                    data={localData.link}
                    className={style["nav-container__menu-block"]}
                /> : null
            }
        </nav>
    );
};

export default Nav;