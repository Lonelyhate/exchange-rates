export interface ICurrency {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export enum CurrenciesListTitles {
    CODE = 'Код валюты',
    RUB = 'Значение в рублях',
    CHANGE_PREVIOUS = 'Изменение курса',
}

export interface IDate {
    year: number | string,
    day: number | string,
    month: number | string
}

export type CurrenciesListTitlesType =
    | CurrenciesListTitles.CODE
    | CurrenciesListTitles.RUB
    | CurrenciesListTitles.CHANGE_PREVIOUS;
