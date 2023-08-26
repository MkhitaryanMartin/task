import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button';

const NavItem = ({
    data,
    className
}) => {
    return (
        <ul className={className}>
            {
                data.map((item) => {
                    return <li key={item.id}>
                        <NavLink to={item.path}>
                            {item.name}
                        </NavLink>
                    </li>
                })
            }
            <li>
                <Button text='Личный кабинет' variant='small' />
            </li>
        </ul>
    );
};
export default NavItem;