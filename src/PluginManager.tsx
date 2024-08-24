import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadable from '@loadable/component';
import { RootState } from './reducers';
import { ApplyThemeAction } from './reducers/themeReducer';

import { FaSun, FaMoon } from 'react-icons/fa';

type PluginComponentType = React.ComponentType<{}>;

const PluginManager: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [CurrentPlugin, setCurrentPlugin] = useState<PluginComponentType | null>(null);
  const dispatch = useDispatch();

  const loadPlugin = (pluginName: string) => {
    const PluginComponent = loadable(() => import(`./plugins/${pluginName}`));
    setCurrentPlugin(() => PluginComponent);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch<any>({ type: 'APPLY_THEME', payload: newTheme });
  };


  useEffect(() => {
    loadPlugin('ArithmeticPlugin');
  }, []);

  return (
    <div className={`plugin-manager ${theme}`}>
      <h1>Modular Calculator</h1>
      <div className="button-container">
        <button onClick={() => loadPlugin('ArithmeticPlugin')}>Arithmetic</button>
        <button onClick={() => loadPlugin('ProgrammingPlugin')}>Programming</button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
      <div className="plugin-area">
      {CurrentPlugin && <CurrentPlugin />}
      </div>
    </div>
  );
};

export default PluginManager;
