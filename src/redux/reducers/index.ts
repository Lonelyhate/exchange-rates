import { combineReducers } from 'redux';
import { currentValueReducer } from './currentValue';
import { listCurrenciesReducer } from './listCurrencies';

export const rootReducer = combineReducers({
    listCurrencies: listCurrenciesReducer,
    currentValue: currentValueReducer
});

export type RootState = ReturnType<typeof rootReducer>;
