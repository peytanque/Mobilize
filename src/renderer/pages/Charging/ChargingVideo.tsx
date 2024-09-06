import { FC } from 'react';

import { CustomPlayer } from '@components';
import { useHistory } from '@hooks';
import { config } from '@config';

export const ChargingVideo: FC = () => {
  const { goChargingLast } = useHistory();

  return (
    <CustomPlayer
      urls={config.i18nVideos.charging}
      redirectTo={goChargingLast}
    />
  );
};

export default ChargingVideo;
