import React, { FC, useState } from 'react';
import { ICurrency } from '../../types/types';
import './CurrenciesItem.scss';

interface CurrenciesItemProps {
    currency: ICurrency;
}

const CurrenciesItem: FC<CurrenciesItemProps> = ({ currency }) => {
    const previousValue = ((currency.Previous - currency.Value) / currency.Value) * 100;

    const [coords, setCoords] = useState([0, 0]);

    const toolTipMouseMove = (e: React.MouseEvent) => {
        setCoords([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    };

    return (
        <div onMouseMove={toolTipMouseMove} className="currency-item">
            <p className="currency-item__text">{currency.CharCode}</p>
            <p className="currency-item__text">{currency.Value}</p>
            <p className="currency-item__text">{previousValue.toFixed(2)}%</p>
            <div style={{ left: coords[0], top: coords[1] }} className="currency-item__tooltip">
                {currency.Name}
            </div>
        </div>
    );
};

export default React.memo(CurrenciesItem);
