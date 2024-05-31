
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h1>Theme Toggle Application</h1>
      <ThemeToggleButton />
    </div>
  );
};

export default App;
