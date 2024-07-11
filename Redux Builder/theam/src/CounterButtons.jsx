// CounterButtons.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd, handleReduce } from './actions';
// import { handleAdd, handleReduce } from './action';

const CounterButtons = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
            <button onClick={() => dispatch(handleReduce(1))}>REDUCE</button>
        </div>
    );
};

export default CounterButtons;
