import React, { FC } from 'react';
import './HeaderCurrencies.scss'

interface HeaderCurrenciesProps {
    text: string
}

const HeaderCurrencies: FC<HeaderCurrenciesProps> = ({text}) => {

    

    return <h2 className="header-currencies">{text}</h2>;
};

export default HeaderCurrencies;
