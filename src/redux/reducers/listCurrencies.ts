import {
    ListCurrenciesAction,
    ListCurrenciesActionTypes,
    ListCurrenciesState,
} from '../types/listCurrencies';

const initialState: ListCurrenciesState = {
    currencies: [],
    error: null,
    loading: false,
};

export const listCurrenciesReducer = (
    state = initialState,
    action: ListCurrenciesAction,
): ListCurrenciesState => {
    switch (action.type) {
        case ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES:
            return {
                currencies: [],
                loading: true,
                error: null,
            };
        case ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_SUCCESS:
            return {
                currencies: Object.values(action.payload),
                loading: false,
                error: null,
            };
        case ListCurrenciesActionTypes.FETCH_LIST_CURRENCIES_ERROR:
            return {
                currencies: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
