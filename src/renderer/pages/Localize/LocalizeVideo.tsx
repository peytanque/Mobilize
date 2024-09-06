import { FC } from 'react';

import { CustomPlayer } from '@components';
import { useHistory } from '@hooks';
import { config } from '@config';

export const LocalizeVideo: FC = () => {
  const { goLocalizeLast } = useHistory();

  return (
    <CustomPlayer
      urls={config.i18nVideos.localize}
      redirectTo={goLocalizeLast}
    />
  );
};

export default LocalizeVideo;
