import { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import ChargingLastVideo from './../../assets/videos/charging-last.mp4';
import { useTranslation } from 'react-i18next';
import { OnProgressProps } from 'react-player/base';

const ChargingLastFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging-last.1')}</p>
      <p>{t('charging-last.2')}</p>
      <p>
        <span>{t('charging-last.3')}</span>
      </p>
    </>
  );
};

const ChargingLastEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging-last.1')}</p>
      <p>
        <span>{t('charging-last.2')}</span>
      </p>
    </>
  );
};

const ChargingLastIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging-last.1')}</p>
      <p>
        <span>{t('charging-last.2')}</span>
      </p>
    </>
  );
};

export const ChargingLast: FC = () => {
  const { goHub } = useHistory();
  const { t, i18n } = useTranslation();
  const ref = useRef<ReactPlayer>(null);
  const [videoState, setVideoState] = useState({
    played: 0,
    seeking: false,
  });
  const { seeking, played } = videoState;

  const onProgress = (state: OnProgressProps) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  useEffect(() => {
    if (played === 1) {
      const timeoutId = setTimeout(() => {
        goHub()
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    }
  }, [played])
  return (
    <div className={tileLastClassname.box}>
      <div className={tileLastClassname.text}>
        {i18n.language === language.fr && <ChargingLastFr />}
        {i18n.language === language.en && <ChargingLastEn />}
        {i18n.language === language.it && <ChargingLastIt />}
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
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ChargingLast;
