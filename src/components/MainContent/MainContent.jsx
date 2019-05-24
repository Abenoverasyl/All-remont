import React from 'react';
import s from '../MainContent/MainContent.module.css';
import WashingMachines from "./WashingMachines/WashingMachines";
import Refrigerators from "./Refrigerators/Refrigerators"
import GasStoves from "./GasStoves/GasStoves"
import {Route} from "react-router-dom"


const MainContent = (props) => {
    return (
        <div className={s.content}>
            <div className={s.block}>
                <div>
                    <Route path='/main' exact component={WashingMachines}/>
                    <Route path='/refrigerators' component={Refrigerators}/>
                    <Route path='/gasStoves' component={GasStoves}/>
                </div>
            </div>
            <div className={s.block}>
                <div className="formSend">
                    <form action="/action_page.php">
                        <input type="text" name="FirstName" placeholder="Ваше имя"/>
                        <input type="text" name="LastName" placeholder="+7 (___) ___ __ __"/>
                        <input type="submit" value="Отправить"/>
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
        </div>
    )
}

export default MainContent;