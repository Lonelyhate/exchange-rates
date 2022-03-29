import axios from 'axios';
import { Dispatch } from 'react';
import { IDate } from '../../types/types';
import { currentValueAction, CurrentValueActionTypes } from '../types/currentValue';

export const fetchCurrentValue = (code: string, name: string, daysArray: IDate[]) => {
    return async (dispatch: Dispatch<currentValueAction>) => {
        try {
            dispatch({ type: CurrentValueActionTypes.FETCH_CURRENT_VALUE });
            const historyArray = [];
            for (let i = 0; i < daysArray.length; i++) {
                const response = await axios.get(
                    `https://www.cbr-xml-daily.ru/archive/${daysArray[i].year}/${daysArray[i].month}/15/daily_json.js`,
                );
                historyArray.push(response.data.Valute[code]);
            }

            dispatch({
                type: CurrentValueActionTypes.FETCH_CURRENT_VALUE_SUCCESS,
                payload: {
                    title: name,
                    historyValues: historyArray,
                    startDate: daysArray[daysArray.length - 1],
                    endDate: daysArray[0],
                },
            });
        } catch (e) {
            dispatch({
                type: CurrentValueActionTypes.FETCH_CURRENT_VALUE_ERROR,
                payload: 'Ошибка загрузки истории валюты',
            });
        }
    };
};
