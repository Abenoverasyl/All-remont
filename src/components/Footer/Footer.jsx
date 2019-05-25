import React from 'react';
import s from '../Footer/Footer.module.css';


const Footer = (props) => {
    return (
        <div className={s.footer}>
            <div className={s.item}>
                {
                    props.contacts.phones.map((phone) => {
                        return (
                            <div className={s.phone}><a href={"tel:" + phone.number}>{phone.name}</a></div>
                        )
                    })
                }
            </div>
            <div className={s.item}>
                {
                    props.menuItems.map((menuItem) => {
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