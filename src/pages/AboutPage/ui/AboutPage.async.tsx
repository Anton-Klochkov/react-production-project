import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //НЕ ЗАБУДЬ УДАЛИТЬ!!!
      setTimeout(() => resolve(import('./AboutPage')), [1000]);
    }),
);
