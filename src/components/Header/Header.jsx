import React from 'react';
import s from '../Header/Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.item}>
                <div className={s.logo}>
                    <div className={s.logoTitle}>ALL-REMONT.KZ</div>
                    <div className={s.logoDescription}>Ремонт бытовых техник в Алматы</div>
                </div>
            </div>
            <div className={s.item}>
                <div className="toHome">Выезд на дом бесплатно</div>
                <div className="city">в городе Алматы</div>
            </div>
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
                <div className="workTime">Работаем без выходных</div>
                <div className="workTime">с 7:00 до 23:00</div>
                <button className={s.RequestCall}>Заказать звонок</button>
            </div>
        </header>
    )
}

export default Header;