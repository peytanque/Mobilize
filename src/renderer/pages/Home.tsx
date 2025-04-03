import { FC } from 'react';

import { useHistory } from '@hooks';
import { CustomPlayer, LanguageSelector } from '@components';

import { useTranslation } from 'react-i18next';

import Logo from '../assets/logo.png';
import { config } from '@config';
import { DiscoverIcon } from '@icons';

export const Home: FC = () => {
  const { t } = useTranslation();
  const { goHub } = useHistory();

  return (
    <div
      className="flex flex-col h-full w-width px-[7.2rem] pb-[9.6rem] bg-black"
      onClick={goHub}
    >
      <div className="absolute left-0 top-0 z-1">
        <CustomPlayer
          urls={config.i18nVideos.homePromo}
          redirectTo={goHub}
          width={1080}
          height={849}
          fullscreen={false}
          withCustomSlider={false}
          redirection={false}
        />
      </div>
      <LanguageSelector />
      <img
        src={Logo}
        width={255}
        height={255}
        alt="logo"
        className="mt-[890px] z-10"
      />
      <div className="flex flex-row mt-[62px] text-white  text-[296px] leading-[143px] font-extrabold uppercase h-[143px] z-10">
        <span>{t('home.my')}</span>
        <span className="text-vermilion">{t('home.duo')}</span>
      </div>
      <div className="flex flex-row text-white  text-[49px] leading-[62px] font-bold uppercase mt-[66px] z-10 ml-[9px]">
        {t('home.sub')}
      </div>

      {/* <div className=" absolute w-full h-full left-0 top-0 z-1">
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          loop
          url={config.videos.home.path}
        />
      </div> */}

      <div className="flex-col w-full mt-auto z-10 flex justify-end">
        <div className="py-[6.25rem] px-[6rem] gap-[20px] max-h-[141px] flex flex-row items-center justify-center uppercase text-[4.5rem] leading-[1.6rem] font-bold text-white bg-vermilion  w-full rounded-[0.1rem]">
          {t('home.cta')}
          <div className="animate-pulse">
            <DiscoverIcon fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
