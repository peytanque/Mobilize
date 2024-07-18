import { FC } from 'react';
import { useHistory } from '@hooks';
import { Button } from '@components';

export const LocalizeLast: FC = () => {
  const { goHome } = useHistory();

  return (
    <div className="flex flex-col h-full w-width px-[7.2rem] pt-[8.5rem] pb-[9.6rem] bg-blue text-white">
      <div className="h-full w-full flex flex-col gap-[5.2rem]">
        <div className="relative font-bold text-[12rem] leading-[14.4rem] uppercase [&_span]:text-vermilion">
          <p>bravo ! vous</p>
          <p>avez réussi</p>
          <p>le défi</p>
          <p>localisation de</p>
          <p>votre duo</p>
          <p>avec brio</p>
        </div>
      </div>
      <div className="mt-auto">
        <Button onClick={goHome}>revenir à l'accueil</Button>
      </div>
    </div>
  );
};

export default LocalizeLast;
