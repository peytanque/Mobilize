import { FC } from 'react';

import { CustomPlayer } from '@components';
import { useHistory } from '@hooks';
import { config } from '@config';

export const ControlVideo: FC = () => {
  const { goControlLast } = useHistory();

  return (
    <CustomPlayer
    urls={config.i18nVideos.control}
    redirectTo={goControlLast}
    />
  );
};

export default ControlVideo;
