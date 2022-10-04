import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <div>{t('Еще что-то')}</div>
      <div>
        {t('О Сайте')}
        {t('О СайтеОАОАООАоаоаоаоафыыыыыыы123')}
      </div>
    </>
  );
};

export default AboutPage;
