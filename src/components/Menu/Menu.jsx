import React from 'react';
import s from '../Menu/Menu.module.css';
import {NavLink} from "react-router-dom";


const Menu = (props) => {
    return (
        <nav className={s.nav}>
            {
                props.menuItems.map((menuItem) => {
                    return (
                        <div className={s.item}>
                            <NavLink className={menuItem.link} to={menuItem.link}>{menuItem.name}</NavLink>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default Menu;