import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, LanguageSelector } from '@components';

import { useHistory } from '@hooks';
import { routes } from '@routes';
import Logo from '../assets/logo.png';

import HomePhoneBgFr from '../assets/home-phone-bg-fr.png';
import HomePhoneBgEn from '../assets/home-phone-bg-fr.png';
import HomeVehicle from '../assets/home-vehicle.png';

export const Home: FC = () => {
  const { t, i18n } = useTranslation();
  const { goNext } = useHistory();

  return (
    <div className="flex flex-col h-full w-width px-[7.2rem] pb-[9.6rem] bg-black">
      {/* absolute elements */}
      {/* {i18n.language === 'fr-FR' && (
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
      )} */}
      <LanguageSelector />
      <img
        src={Logo}
        width={255}
        height={255}
        alt="logo"
        className="mt-[132px]"
      />
      <div className="flex flex-row mt-[62px] text-white  text-[296px] leading-[143px] font-bold uppercase h-[143px]">
        <span>my</span>
        <span className="text-vermilion">duo</span>
      </div>
      <div className="flex flex-row text-white  text-[49px] leading-[62px] font-bold uppercase mt-[2ch]">
        ouvrez. contrôlez. partagez. profitez.
      </div>

      {/* ! absolute elements */}
      <div className="flex-col w-full mt-auto z-10 flex justify-end">
        <Button to={routes.hub}>{t('home.cta')}</Button>
      </div>
    </div>
  );
};

export default Home;
