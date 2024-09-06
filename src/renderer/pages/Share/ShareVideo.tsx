import { FC } from 'react';

import { CustomPlayer } from '@components';
import { useHistory } from '@hooks';
import { config } from '@config';

export const ShareVideo: FC = () => {
  const { goShareLast } = useHistory();

  return (
    <CustomPlayer
      urls={config.i18nVideos.share}
      redirectTo={goShareLast}
    />
  );
};

export default ShareVideo;
