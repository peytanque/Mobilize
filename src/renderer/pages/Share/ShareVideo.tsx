import { CustomPlayer } from '@components';
import { FC, useRef } from 'react';
import ReactPlayer from 'react-player';
import TestVideo from './../../assets/videos/test.mp4';
import { useHistory } from '@hooks';

export const ShareVideo: FC = () => {
  const ref = useRef<ReactPlayer>(null);
  const { goShareLast } = useHistory();

  const videoFr = TestVideo;
  const videoEn =
    'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';
  const videoIt =
    'https://videos.pexels.com/video-files/3946082/3946082-uhd_1440_2732_25fps.mp4';

  return (
    <CustomPlayer
      urls={{ en: videoEn, fr: videoFr, it: videoIt }}
      redirectTo={goShareLast}
    />
  );
};

export default ShareVideo;
