import { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import LocalizeLastVideo from './../../assets/videos/localize-last.mp4';
import { useTranslation } from 'react-i18next';
import { PresenceType, useIdleTimer } from 'react-idle-timer';

const LocalizeLastFr: FC = () => {
  const { t } = useTranslation();


  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p>{t('localize-last.2')}</p>
      <p>
        <span>{t('localize-last.3')}</span>
      </p>
    </>
  );
};

const LocalizeLastEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p>
        <span>{t('localize-last.2')}</span>
      </p>
    </>
  );
};

const LocalizeLastIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p>
        <span>{t('localize-last.2')}</span>
      </p>
    </>
  );
};

export const LocalizeLast: FC = () => {
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
        {i18n.language === language.fr && <LocalizeLastFr />}
        {i18n.language === language.en && <LocalizeLastEn />}
        {i18n.language === language.it && <LocalizeLastIt />}
      </div>
      <div className={tileLastClassname.button}>
        <Button onClick={goHub}>{t('localize-last.cta')}</Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={LocalizeLastVideo}
          ref={ref}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default LocalizeLast;
