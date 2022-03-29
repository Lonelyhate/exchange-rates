import React, { FC } from 'react';
import './CurrenciesListHeader.scss'
import { CurrenciesListTitles, CurrenciesListTitlesType } from '../../types/types';

const CurrenciesListHeader: FC = () => {
    const namesTitles: CurrenciesListTitlesType[] = [
        CurrenciesListTitles.CODE,
        CurrenciesListTitles.RUB,
        CurrenciesListTitles.CHANGE_PREVIOUS,
    ];

    return (
        <ul className="currencies-header">
            {namesTitles.map((name) => (
                <li key={name} className="currencies-header__item">
                    {name}
                </li>
            ))}
        </ul>
    );
};

export default CurrenciesListHeader;
