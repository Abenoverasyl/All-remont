import React from 'react';
import s from '../Menu/Menu.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
// }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;

let menuItems = [
    {name: 'Главная', link: 'main'},
    {name: 'Контакты', link: 'contacts'},
    {name: 'Хозяйке на заметку', link: 'notesForMistress '},
    {name: 'Вопрос-ответ', link: 'questionAnswer'},
];

const Menu = () => {
    return (
        <BrowserRouter>
            <nav className={s.nav}>
                {
                    menuItems.map((menuItem, key) => {
                        return (
                            <div className={s.item}>
                                <NavLink className={menuItem.link} to={menuItem.link}>{menuItem.name}</NavLink>
                            </div>
                        )
                    })
                }
            </nav>
        </BrowserRouter>
    )
}

export default Menu;