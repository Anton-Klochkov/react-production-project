import { FC, useMemo, useState } from 'react';
import { LocalStorageTheme, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem(LocalStorageTheme) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  console.log('defaultTheme', defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
