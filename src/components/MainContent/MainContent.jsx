import React from 'react';
import s from '../MainContent/MainContent.module.css';
import WashingMachines from "./WashingMachines/WashingMachines";
import Refrigerators from "./Refrigerators/Refrigerators"
import GasStoves from "./GasStoves/GasStoves"
import {BrowserRouter, Route} from "react-router-dom"
import ServicesLinks from "./ServicesLinks/ServicesLinks";


const MainContent = () => {
    return (
        <BrowserRouter>
            <div className={s.content}>
                <div className={s.block}>
                    <div>
                        <Route path='/washingMachines' component={WashingMachines}/>
                        <Route path='/refrigerators' component={Refrigerators}/>
                        <Route path='/gasStoves' component={GasStoves}/>
                    </div>
                </div>
                <div className={s.block}>
                    {/*<ServicesLinks/>*/}
                    <div className="formSend">
                        <form action="/action_page.php">
                            <input type="text" name="FirstName" placeholder="Ваше имя" />
                            <input type="text" name="LastName" placeholder="+7 (___) ___ __ __" />
                            <input type="submit" value="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
        </BrowserRouter>
)
}

export default MainContent;