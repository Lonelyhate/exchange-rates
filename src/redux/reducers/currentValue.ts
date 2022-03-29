import {
    currentValueAction,
    CurrentValueActionTypes,
    CurrentValueState,
} from '../types/currentValue';

export const initialState: CurrentValueState = {
    title: null,
    historyValues: [],
    error: null,
    loading: false,
    startDate: null,
    endDate: null,
};

export const currentValueReducer = (
    state = initialState,
    action: currentValueAction,
): CurrentValueState => {
    switch (action.type) {
        case CurrentValueActionTypes.FETCH_CURRENT_VALUE:
            return {
                ...state,
                title: null,
                historyValues: [],
                error: null,
                loading: true,
            };
        case CurrentValueActionTypes.FETCH_CURRENT_VALUE_SUCCESS:
            return {
                ...state,
                title: action.payload.title,
                historyValues: action.payload.historyValues,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                loading: false,
                error: null,
            };
        case CurrentValueActionTypes.FETCH_CURRENT_VALUE_ERROR:
            return {
                ...state,
                title: null,
                error: action.payload,
                historyValues: [],
                loading: false,
            };
        default:
            return state;
    }
};
