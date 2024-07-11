// CounterValue.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
    const counter = useSelector((state) => state.counter);
    const theme = useSelector((state) => state.theme);

    return (
        <div id='Value' className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
            Counter : {counter}
        </div>
    );
};

export default CounterValue;
