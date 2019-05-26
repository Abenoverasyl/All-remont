import React from 'react';
import s from '../BelieveUs/BelieveUs.module.css';

const BelieveUs = () => {
    return (
        <div className={s.content}>
            <div className={s.titleBelieveUs}>
                Доверьте свою технику проверенным специалистам
            </div>
            <div className={s.block}>
                <div className={s.imageAbout}>
                    <img src="http://a-remont.arsenic.beget.tech/images/img1/about-us.png" alt=""/>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.textAbout}>
                    Сервис по ремонту бытовой техники объединяет под одной крышей опытных мастеров, профессионально занимающихся обслуживанием и починкой крупной бытовой техники: холодильников, стиральных и посудомоечных машин. Мы используем специализированные инструменты и оригинальные запчасти от производителя, что позволяет нам решить большинство проблем непосредственно в день обращения. Понимая, что поломка может случиться в самый неподходящий момент, мы принимаем заказы с 8:00 до 23:00 и работаем без выходных, оперативно реагируя на все заявки. Визит мастера обязательно начинается с детальной диагностики, а любые ремонтные работы проводятся после согласования их окончательной стоимости. Мы принимаем любые виды оплаты, подтверждаем их документально и всегда соблюдаем гарантийные обязательства.
                </div>
            </div>
        </div>
    )
}

export default BelieveUs;