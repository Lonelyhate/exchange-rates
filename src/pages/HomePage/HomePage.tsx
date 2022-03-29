import React, { FC } from 'react';
import CurrenciesList from '../../components/CurrenciesList/CurrenciesList';
import { useIsZero } from '../../hooks/useIsZero';
import HeaderCurrencies from '../../shared/HeaderCurrencies/HeaderCurrencies';
import './HomePage.scss';

const HomePage: FC = () => {
    const day = new Date().getDate();
    const month = useIsZero(new Date().getMonth() + 1);
    const year = useIsZero(new Date().getFullYear());

    const title = `Курсы валют ЦБ РФ на ${day}.${month}.${year}`;

    return (
        <div className="home-page">
            <HeaderCurrencies text={title} />
            <CurrenciesList />
        </div>
    );
};

export default HomePage;
