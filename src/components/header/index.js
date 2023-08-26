import React, { useState } from 'react';
import Nav from './nav';
import style from "./style.module.scss"
import { NavLink } from 'react-router-dom';
import NavItem from "./nav/navItem";
import { localData } from '../../assets/localData';
import logo from "../../assets/img/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <header className={open ? style["menu-show"] : style['header-container']}>
      <Nav open={open} setOpen={handleOpen} setClose={handleClose}>
        <NavLink to="/" className={style.logo}>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className={style["menu-block"]}>
          {
            open ? <NavItem
              data={localData.link}
              className={style.ban}
            /> : null
          }
        </div>
      </Nav>
    </header>
  );
};

export default Header;