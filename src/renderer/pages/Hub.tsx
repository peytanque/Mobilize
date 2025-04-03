import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { HomeIcon } from '@icons';

import { LanguageSelector } from '@components';
import { ControlTile, ChargingTile, LocalizeTile, ShareTile } from './Tiles';
import { config } from '@config';

import { hubClassname } from './style';

export const Hub: FC = () => {
  const { goHome } = useHistory();

  const { isFinish } = useIdle(config.redirectionTimer.hub);

  if (isFinish) {
    goHome();
  }

  return (
    <div className={hubClassname.page}>
      <LanguageSelector />

      <div className={hubClassname.back} onClick={goHome}>
        <HomeIcon />
      </div>
      <div className={hubClassname.grid}>
        <ControlTile />
        <ChargingTile />
        <ShareTile />
        <LocalizeTile />
      </div>
    </div>
  );
};

export default Hub;
