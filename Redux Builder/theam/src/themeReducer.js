// themeReducer.js

import { SWITCH_THEME } from '../src/actions';

const initialState = 'light';

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return action.payload;
        default:
            return state;
    }
};

export default themeReducer;
