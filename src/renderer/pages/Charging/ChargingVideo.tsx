import { CustomPlayer } from '@components';
import { FC } from 'react';
import ChargingVideoFr from './../../assets/videos/charging-fr.mp4';
import { useHistory } from '@hooks';

export const ChargingVideo: FC = () => {
  const { goChargingLast } = useHistory();

  const videoEn =
    'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';
  const videoIt =
    'https://videos.pexels.com/video-files/3946082/3946082-uhd_1440_2732_25fps.mp4';

  return (
    <CustomPlayer
      urls={{ en: videoEn, fr: ChargingVideoFr, it: videoIt }}
      redirectTo={goChargingLast}
    />
  );
};

export default ChargingVideo;
