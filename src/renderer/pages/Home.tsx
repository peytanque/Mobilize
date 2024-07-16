import { FC } from 'react';
import { LanguageSelector } from '../components';
import { useTranslation } from 'react-i18next';


export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-width p-24">
      <LanguageSelector />
      <h1>{t('home.welcome')}</h1>
    </div>
  );
};

export default Home;
