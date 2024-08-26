import { FC } from 'react';
import { useHistory } from '@hooks';
import { BackIcon, FlashIcon } from '@icons';
import { Button } from '@components';
import { routes } from '@routes';

export const Charging: FC = () => {
  const { goPrevious } = useHistory();

  return (
    <div className="flex flex-col h-full w-width px-[7.2rem] pt-[21.2rem] pb-[9.6rem] bg-gradient-to-b from-alabaster via-mercury to-white">
      <div className="absolute top-[2.8rem] left-[2.8rem]" onClick={goPrevious}>
        <BackIcon fill="black" />
      </div>
      <div className="h-full w-full flex flex-col gap-[5.2rem]">
        <FlashIcon fill="#E3E3E3" />
        <div className="relative font-bold text-[12rem] leading-[14.4rem] uppercase [&_span]:text-vermilion">
          <p>elevez votre</p>
          <p>niveau de jeu</p>
          <p>grace à</p>
          <p>
            my<span>duo</span>
          </p>
          <div className="h-[2ch] w-[1000px] absolute bottom-0"></div>
        </div>
      </div>
      <div className="mt-auto">
        <Button to={routes.chargingVideo}>c'est parti</Button>
      </div>
    </div>
  );
};

export default Charging;
