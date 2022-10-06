import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //НЕ ЗАБУДЬ УДАЛИТЬ!!!
      setTimeout(() => resolve(import('./MainPage')), [1000]);
    }),
);
