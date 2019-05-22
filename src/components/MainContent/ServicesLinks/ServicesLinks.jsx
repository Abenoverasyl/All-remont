import React from 'react';

import s from '../ServicesLinks/ServicesLinks.module.css';
import {NavLink} from "react-router-dom"


let services = [
    {name: "Стиральные машины", link: "washingMachines"},
    {name: "Холодильники", link: "refrigerators"},
    {name: "Газовые плиты", link: "gasStoves"}
];

const ServicesLinks = () => {
    return (
        services.map((service, key) => {
            return (
                <div className={s.item}>
                    <NavLink className={service.link} to={service.link}>{service.name}</NavLink>
                </div>
            )
        })
    )
}

export default ServicesLinks;