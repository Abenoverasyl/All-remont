import React from 'react';
import s from '../MainContent/MainContent.module.css';
import WashingMachines from "./WashingMachines/WashingMachines";
import Refrigerators from "./Refrigerators/Refrigerators"
import GasStoves from "./GasStoves/GasStoves"
import {Route} from "react-router-dom"
import HouseholdAppliances from "./HouseholdAppliances/HouseholdAppliances";
import ServicesLinks from "./ServicesLinks/ServicesLinks";
import BelieveUs from "./BelieveUs/BelieveUs";


const MainContent = (props) => {
    return (
        <div className={s.content}>
            <div className={s.block}>
                <div>
                    <Route path='/' exact component={HouseholdAppliances}/>
                    <Route path='/washingMachines' exact component={WashingMachines}/>
                    <Route path='/refrigerators' component={Refrigerators}/>
                    <Route path='/gasStoves' component={GasStoves}/>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.formSend}>
                    <form action="/action_page.php">
                        <div className={s.callBackItem}>ПОЛУЧИТЕ СКИДКУ 20% ЗА ОНЛАЙН ЗАКАЗ</div>
                        <div className={s.callBackItem}>
                            <input type="text" name="LastName" placeholder="+7 (___) ___ __ __"/>
                            <input type="submit" value="Получить скидку >"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className={s.blockHowWeWork}>
                <div className={s.blockWeWorkName}>
                    КАК МЫ РАБОТАЕМ?
                </div>
                <div className={s.itemsWeWork}>
                    {
                        props.howWeWorks.map((howWeWork, key) => {
                            return (
                                <div className={s.itemWeWork}>
                                    <div className={s.itemImage}>
                                        <img src={howWeWork.image} alt=""/>
                                    </div>
                                    <div className={s.itemTitle}>{howWeWork.title}</div>
                                    <div className={s.itemText}>{howWeWork.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <BelieveUs />
            <ServicesLinks />
        </div>
    )
}

export default MainContent;