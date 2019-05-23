import React from 'react';
import s from '../Header/Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.item}>
                <div className={s.logo}>
                    {/*<img src="https://stir-profi.ru/images/brand/logo-stir-profi.png" alt=""/>*/}
                    ALL-REMONT
                </div>
            </div>
            <div className={s.item}>
                <div className="toHome">Выезд на дом бесплатно</div>
                <div className="city">в городе Алматы</div>
            </div>
            <div className={s.item}>
                <div className={s.phone}><a href="tel:+77476372585">+7(747) 637 2585</a></div>
                <div className={s.phone}><a href="tel:+77714120514">+7(771) 412 0514</a></div>
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