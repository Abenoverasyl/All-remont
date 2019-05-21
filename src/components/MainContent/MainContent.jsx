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
                    <ServicesLinks />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default MainContent;