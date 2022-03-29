import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchCurrentValue } from '../../redux/actions/currentValue';
import { fetchListCurrencies } from '../../redux/actions/listCurrencies';
import { IDate } from '../../types/types';
import CurrenciesItem from '../CurrenciesItem/CurrenciesItem';
import CurrenciesListHeader from '../CurrenciesListHeader/CurrenciesListHeader';
import './CurrenciesList.scss';

const CurrenciesList: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currencies, loading } = useTypedSelector((state) => state.listCurrencies);

    useEffect(() => {
        dispatch(fetchListCurrencies());
    }, []);

    const isZero = (num: number) => {
        return num < 10 ? '0' + num : num;
    };

    const daysArray: IDate[] = [];
    const currentDate = Date.parse(new Date() + '');
    const oneDayMs = 1000 * 60 * 60 * 24;

    for (let i = 0; i < 10; i++) {
        const newDate = new Date(currentDate - oneDayMs * (i + 1));
        const day = newDate.getDate();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        daysArray.push({
            day: isZero(day),
            month: isZero(month + 1),
            year: isZero(year),
        });
    }

    const onClickToValute = (name: string, title: string, arrayDays: IDate[]) => {
        navigate(`/${name}`);
        dispatch(fetchCurrentValue(name, title, arrayDays));

        localStorage.setItem(
            'value',
            JSON.stringify({ name: name, title: title, array: arrayDays }),
        );
    };

    return (
        <div className="currencies">
            <CurrenciesListHeader />
            <ul className="currencies__list">
                {currencies.map((item) => (
                    <li
                        key={item.ID}
                        onClick={() => onClickToValute(item.CharCode, item.Name, daysArray)}
                        className="currencies__item">
                        <CurrenciesItem currency={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(CurrenciesList);
