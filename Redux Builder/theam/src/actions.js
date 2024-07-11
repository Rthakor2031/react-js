// action.js

// Counter actions
export const ADD = 'ADD';
export const REDUCE = 'REDUCE';

export const handleAdd = (payload) => ({
    type: ADD,
    payload,
});

export const handleReduce = (payload) => ({
    type: REDUCE,
    payload,
});

// Theme actions
export const SWITCH_THEME = 'SWITCH_THEME';

export const handleTheme = (theme) => ({
    type: SWITCH_THEME,
    payload: theme,
});
