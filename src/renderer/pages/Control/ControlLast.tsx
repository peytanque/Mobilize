import { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import ControlLastVideo from './../../assets/videos/control-last.mp4';
import { useTranslation } from 'react-i18next';
import { OnProgressProps } from 'react-player/base';
import { PresenceType, useIdleTimer } from 'react-idle-timer';

const ControlLastFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>
        <span>{t('control-last.2')}</span>
        </p>
      <p>
        <span>{t('control-last.3')}</span>
      </p>
    </>
  );
};

const ControlLastEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>
        <span>{t('control-last.2')}</span>
      </p>
    </>
  );
};

const ControlLastIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>
        <span>{t('control-last.2')}</span>
      </p>
    </>
  );
};

export const ControlLast: FC = () => {
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

  const onPresenceChange = (presence: PresenceType) => {
    if (presence.type === 'idle') {
      goHub()
    }
  }

  const _ = useIdleTimer({ onPresenceChange, timeout: 3000, startOnMount: played === 1});

  return (
    <div className={tileLastClassname.box}>
      <div className={tileLastClassname.text}>
        {i18n.language === language.fr && <ControlLastFr />}
        {i18n.language === language.en && <ControlLastEn />}
        {i18n.language === language.it && <ControlLastIt />}
      </div>
      <div className={tileLastClassname.button}>
        <Button onClick={goHub}>{t('control-last.cta')}</Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={ControlLastVideo}
          ref={ref}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ControlLast;
