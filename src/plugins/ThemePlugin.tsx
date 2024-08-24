import React from 'react';
import { useDispatch } from 'react-redux';

const ThemePlugin: React.FC = () => {
  const dispatch = useDispatch();

  const applyTheme = (theme: 'light' | 'dark') => {
    dispatch({ type: 'APPLY_THEME', payload: theme });
  };

  return (
    <div className="theme-plugin">
      <h2>Theme Plugin</h2>
      <button onClick={() => applyTheme('dark')}>Dark Theme</button>
      <button onClick={() => applyTheme('light')}>Light Theme</button>
    </div>
  );
};

export default ThemePlugin;
