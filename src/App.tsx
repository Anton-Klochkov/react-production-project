import { Suspense, useContext, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import './styles/index.scss';
import { LocalStorageTheme, Theme, ThemeContext } from './theme/ThemeContext';
import ThemeProvider from './theme/ThemeProvider';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </>
      <Suspense fallback={<div>"LOADING!!!!!!"</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'*'} element={<p>UNDEFINED</p>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
