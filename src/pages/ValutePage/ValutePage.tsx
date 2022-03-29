import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchCurrentValue } from '../../redux/actions/currentValue';
import HeaderCurrencies from '../../shared/HeaderCurrencies/HeaderCurrencies';

const ValutePage: FC = () => {
    const { historyValues, title, startDate, endDate } = useTypedSelector(
        (state) => state.currentValue,
    );
    const dispatch = useDispatch();

    console.log(historyValues)

    useEffect(() => {
        if (!title) {
            let value = localStorage.getItem('value');
            if (value) {
                const obj = JSON.parse(value);
                dispatch(fetchCurrentValue(obj.name, obj.title, obj.array));
            }
        }
    }, []);

    const text =
        startDate && endDate
            ? `Курсы валюты "${title}" на ${startDate.day}.${startDate.month}.${startDate.year} - ${endDate.day}.${endDate.month}.${endDate.year}`
            : '';

    return (
        <div className="valute-page">
            <HeaderCurrencies text={text} />
        </div>
    );
};

export default ValutePage;
