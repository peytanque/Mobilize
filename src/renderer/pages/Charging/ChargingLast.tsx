import { FC, LegacyRef, useEffect, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import ChargingLastVideo from './../../assets/videos/charging-last.mp4';
import { OnProgressProps } from 'react-player/base';
import { useTranslation } from 'react-i18next';

export const ChargingLast: FC = () => {
  const { goHub } = useHistory();
  const { t, i18n } = useTranslation();

  const ref = useRef<ReactPlayer>(null);

  const [duration, setDuration] = useState<number>(0);
  const [seek, setSeek] = useState<number>(0);
  const [progress, setProgress] = useState<OnProgressProps | null>(null);

  const handleProgress = (state: OnProgressProps) => {
    if (!seek) {
      setProgress(state);
    }
  };

  return (
    <div className={tileLastClassname.box}>
      <div className={tileLastClassname.text}>
        {i18n.language === language.fr && (
          <>
            <p>{t('charging-last.1')}</p>
            <p>{t('charging-last.2')}</p>
            <p>
              <span>{t('charging-last.3')}</span>
            </p>
          </>
        )}
        {i18n.language === language.en && (
          <>
            <p>{t('charging-last.1')}</p>
            <p>
              <span>{t('charging-last.2')}</span>
            </p>
          </>
        )}
      </div>
      <div className={tileLastClassname.button}>
        <Button onClick={goHub}>{t('charging-last.cta')}</Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={ChargingLastVideo}
          ref={ref}
          onSeek={(currentSeek) => setSeek(currentSeek)}
          onProgress={(currentProgress) => handleProgress(currentProgress)}
          onDuration={(currentDuration) => setDuration(currentDuration)}
        />
      </div>
    </div>
  );
};

export default ChargingLast;
