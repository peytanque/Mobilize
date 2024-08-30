import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, LanguageSelector } from '@components';

import { useHistory } from '@hooks';
import { routes } from '@routes';
import Logo from '../assets/logo.png';

import Video from '../assets/videos/home-video.mp4';
import ReactPlayer from 'react-player';

export const Home: FC = () => {
  const { t } = useTranslation();
  const { goHub } = useHistory();

  return (
    <div className="flex flex-col h-full w-width px-[7.2rem] pb-[9.6rem] bg-black" onClick={goHub}>
      <LanguageSelector />
      <img
        src={Logo}
        width={255}
        height={255}
        alt="logo"
        className="mt-[132px] z-10"
      />
      <div className="flex flex-row mt-[62px] text-white  text-[296px] leading-[143px] font-bold uppercase h-[143px] z-10">
        <span>{t('home.my')}</span>
        <span className="text-vermilion">{t('home.duo')}</span>
      </div>
      <div className="flex flex-row text-white  text-[49px] leading-[62px] font-bold uppercase mt-[2ch] z-10">
        {t('home.sub')}
      </div>
      
      <div className=" absolute w-full h-full left-0 top-0 z-1">
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          loop
          url={'https://s3-figma-videos-production-sig.figma.com/video/1119227739719941906/ORG/ae5a/6978/-2055-4b89-b87d-ae83041ad6e8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR7vE0ssjeKUFP7nLC-6To2J7Z8Jyk9TFViqMbm8VHST8pukt0CBmEkCfouSpZ7AyLKrTnhHFSRwUs9BoD3pBRPJDNUTpWfJ~m9TDOMZoSPLU-unnnmh3sSSx0ILxskmbxx2IfLNW4QxARVoX0AX0~sguu9WyZIOmEPA~vh~S2nL0X6rTamvvxvzt0oMXoBoN1gYeN7PjjNsx7Jr7RcWT8vBHQx7Slj5LehJK32uakOP9V2FQxErfIshG1QbAckm~oqH~H8tx0C7QBwaPLbbJAf5OJ6ND1xYK37h3vVTD4Q764-XRUtQ9bPf62l8uTtyjVqagL5bNrTFvMyLG0BGDg__'}
        />
      </div>

      <div className="flex-col w-full mt-auto z-10 flex justify-end">
        <Button to={routes.hub}>{t('home.cta')}</Button>
      </div>
    </div>
  );
};

export default Home;
