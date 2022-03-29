import { ICurrency } from '../../types/types';

export interface ListCurrenciesState {
    currencies: ICurrency[];
    loading: boolean;
    error: null | string;
}

export enum ListCurrenciesActionTypes {
    FETCH_LIST_CURRENCIES = 'FETCH_LIST_CURRENCIES',
    FETCH_LIST_CURRENCIES_SUCCESS = 'FETCH_LIST_CURRENCIES_SUCCESS',
    FETCH_LIST_CURRENCIES_ERROR = 'FETCH_LIST_CURRENCIES_ERROR',
}

interface FetchListCurrenciesAction {
    type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES;
}

interface FetchListCurrenciesSuccessAction {
    type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_SUCCESS;
    payload: ICurrency[];
}

interface FetchListCurrenciesErrorAction {
    type: ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_ERROR;
    payload: string;
}

export type ListCurrenciesAction =
    | FetchListCurrenciesAction
    | FetchListCurrenciesSuccessAction
    | FetchListCurrenciesErrorAction;
