import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, LanguageSelector } from '@components';

import HomePhoneBgFr from '../assets/home-phone-bg-fr.png';
import HomePhoneBgEn from '../assets/home-phone-bg-fr.png';
import HomeVehicle from '../assets/home-vehicle.png';
import { useHistory } from '@hooks';
import { routes } from '@routes';

export const Home: FC = () => {
  const { t, i18n } = useTranslation();
  const { goNext } = useHistory();

  return (
    <div className="flex flex-col h-full w-width px-[7.2rem] pb-[9.6rem] bg-alabaster">
      {/* absolute elements */}
      {i18n.language === 'fr-FR' && (
        <img
          src={HomePhoneBgFr}
          className="absolute right-0 top-0"
          alt="home-phone-bg-fr"
        />
      )}
      {i18n.language === 'en-US' && (
        <img
          src={HomePhoneBgEn}
          className="absolute right-0 top-0"
          alt="home-phone-bg-en"
        />
      )}
      <LanguageSelector />
      {/* ! absolute elements */}

      <div className="relative mt-[51.5rem] px-[3.6rem] py-[4rem] border font-extrabold border-silver bg-alabaster w-[fit-content] leading-[12.8rem]">
        <p className=" text-[16.8rem] uppercase">
          <span className="text-vermilion">{t('home.title.1')}</span>{' '}
          <span className="text-black">{t('home.title.2')}</span>
        </p>
        <p className="text-[16.8rem] uppercase">
          <span className="text-black">{t('home.title.3')}</span>{' '}
          <span className="text-vermilion">{t('home.title.4')}</span>
        </p>
      </div>
      <div className="relative ml-[12.6rem] px-[3.6rem] py-[4rem] border font-extrabold border-silver bg-alabaster leading-[12.8rem] w-[fit-content]">
        <p className="text-[5.6rem] leading-[4.8rem] uppercase text-black">
          {t('home.sub-title.1')}{' '}
        </p>
        <p className="text-[5.6rem] leading-[4.8rem] uppercase text-black">
          {t('home.sub-title.2')}
        </p>
      </div>
      {/* absolute elements */}
      <img
        src={HomeVehicle}
        alt="home-vehicle"
        className="absolute left-0 bottom-[23.7rem] w-full"
      />
      {/* ! absolute elements */}
      <div className="w-full mt-auto z-10 flex justify-end">
        <Button to={routes.hub}>{t('home.cta')}</Button>
      </div>
    </div>
  );
};

export default Home;
