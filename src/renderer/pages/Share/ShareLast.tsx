import { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import ShareLastVideo from './../../assets/videos/share-last.mp4';
import { OnProgressProps } from 'react-player/base';
import { useTranslation } from 'react-i18next';

const ShareLastFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p>{t('share-last.2')}</p>
      <p>
        <span>{t('share-last.3')}</span>
      </p>
    </>
  );
};

const ShareLastEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p>{t('share-last.2')}</p>
      <p>
        <span>{t('share-last.2')}</span>
      </p>
    </>
  );
};

const ShareLastIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p>
        <span>{t('share-last.2')}</span>
      </p>
      <p>
        <span>{t('share-last.3')}</span>
      </p>
    </>
  );
};

export const ShareLast: FC = () => {
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
        {i18n.language === language.fr && <ShareLastFr />}
        {i18n.language === language.en && <ShareLastEn />}
        {i18n.language === language.it && <ShareLastIt />}
      </div>
      <div className={tileLastClassname.button}>
        <Button onClick={goHub}>{t('share-last.cta')}</Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={ShareLastVideo}
          ref={ref}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ShareLast;
