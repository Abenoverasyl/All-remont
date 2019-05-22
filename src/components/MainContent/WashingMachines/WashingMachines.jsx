import React from 'react';
import s from '../WashingMachines/WashingMachines.module.css';

const WashingMachines = () => {
    return (
        <div className={s.content}>
            <div className={s.block}>
                <div className={s.welcome + " content-left"}>
                    <h1>БЫСТРЫЙ РЕМОНТ СТИРАЛЬНЫХ МАШИН В АЛМАТЫ НА ДОМУ ОТ 2000 тг.</h1>
                    <div className="allMarks">Всех существующих марок и видов</div>
                </div>
                <div className={s.welcome + " content-right"}>
                    <img src="https://masterplus.top/rostov-na-donu/img/images/machines.png.pagespeed.ce.CSEhRqL78K.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default WashingMachines;