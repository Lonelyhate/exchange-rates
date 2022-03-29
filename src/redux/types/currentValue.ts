import { ICurrency, IDate } from '../../types/types';

export interface CurrentValueState {
    title: string | null;
    historyValues: ICurrency[];
    loading: boolean;
    error: null | string;
    startDate: IDate | null,
    endDate: IDate | null
}

export enum CurrentValueActionTypes {
    FETCH_CURRENT_VALUE = 'FETCH_CURRENT_VALUE',
    FETCH_CURRENT_VALUE_SUCCESS = 'FETCH_CURRENT_VALUE_SUCCESS',
    FETCH_CURRENT_VALUE_ERROR = 'FETCH_CURRENT_VALUE_ERROR',
}

interface FetchCurrentValueAction {
    type: CurrentValueActionTypes.FETCH_CURRENT_VALUE;
}

interface FetchCurrentValueActionSuccess {
    type: CurrentValueActionTypes.FETCH_CURRENT_VALUE_SUCCESS;
    payload: {
        title: string;
        historyValues: ICurrency[];
        startDate: IDate
        endDate: IDate
    };
}

interface FetchCurrentValueActionError {
    type: CurrentValueActionTypes.FETCH_CURRENT_VALUE_ERROR;
    payload: string;
}

export type currentValueAction =
    | FetchCurrentValueActionError
    | FetchCurrentValueAction
    | FetchCurrentValueActionSuccess;
