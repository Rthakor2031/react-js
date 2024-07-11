// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import Theme from './Theme';
import './App.css'; 

const App = () => {
    return (
        <Provider store={store}>
            <div style={{textAlign:"center"}}>
                <h1>Counter and Theme Switcher</h1>
                <br />
                <Theme />
                <br />
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
