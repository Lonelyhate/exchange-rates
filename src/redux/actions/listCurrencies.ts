import { Dispatch } from "react"
import { ListCurrenciesAction, ListCurrenciesActionTypes } from "../types/listCurrencies"
import axios from 'axios'

export const fetchListCurrencies = () => {
    return async (dispatch: Dispatch<ListCurrenciesAction>) => {
        try {
            dispatch({type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES})
            const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            dispatch({
                type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_SUCCESS,
                payload: response.data.Valute
            });
        } catch(e) {
            dispatch({
                type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_ERROR,
                payload: 'Ошибка получения курсов валют'
            })
        }
    }
}