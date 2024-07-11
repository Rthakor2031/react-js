// Theme.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../src/actions';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    return (
        <div>
            <button
                onClick={() => dispatch(handleTheme('light'))}
                disabled={theme === 'light'}
            >
                Switch to Light
            </button>
            <button
                onClick={() => dispatch(handleTheme('dark'))}
                disabled={theme === 'dark'}
            >
                Switch to Dark
            </button>
        </div>
    );
};

export default Theme;
