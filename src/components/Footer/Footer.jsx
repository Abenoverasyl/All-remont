import React from 'react';
import s from '../Footer/Footer.module.css';

let menuItems = [
    {name: 'Главная', link: 'main'},
    {name: 'Контакты', link: 'contacts'},
    {name: 'Хозяйке на заметку', link: 'notesForMistress '},
    {name: 'Вопрос-ответ', link: 'questionAnswer'},
];


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.item}>
                <div className="phone"><a href="tel:+77476372585">+7(747) 637 2585</a></div>
                <div className="phone"><a href="tel:+77714120514">+7(771) 412 0514</a></div>
            </div>
            <div className={s.item}>
                {
                    menuItems.map((menuItem, key) => {
                        return (
                            <div className={s.menuItem}>
                                <a className={menuItem.link + ' footerLink'} href={menuItem.link}>{menuItem.name}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.item}>
                <button className={s.RequestCall}>Заказать звонок</button>
                <div className="workTime">Работаем без выходных</div>
                <div className="workTime">с 7:00 до 23:00</div>
            </div>
            <div className={s.item}>
                <div className="about-company">
                    © 2019 «All-remont».
                    город Алматы.
                </div>
            </div>
        </div>
    )
}

export default Footer;