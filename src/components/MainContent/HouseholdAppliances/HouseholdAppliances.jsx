import React from 'react';
import s from '../HouseholdAppliances/HouseholdAppliances.module.css';

const HouseholdAppliances = () => {
    return (
        <div className={s.content}>
            <div className={s.welcome + " content-left"}>
                <h1>Профессиональный ремонт холодильников, стиральных машин и посудомоек на дому от 2000т</h1>
                <div className="allMarks">Всех существующих марок и видов</div>
            </div>
            <div className={s.welcome + " content-right"}>
                <img src="http://remont-365.kz/images/pic.png?crc=3785374186" alt=""/>
            </div>
        </div>
    )
}

export default HouseholdAppliances;