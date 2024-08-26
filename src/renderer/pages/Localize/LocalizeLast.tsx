import { FC, useRef, useState } from 'react';
import { useHistory } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import LocalizeLastVideo from './../../assets/videos/localize-last.mp4';
import { useTranslation } from 'react-i18next';

export const LocalizeLast: FC = () => {
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
            <p>{t('localize-last.1')}</p>
            <p>
             {t('localize-last.2')}
            </p>
            <p>
              <span>{t('localize-last.3')}</span>
            </p>
          </>
        )}
        {i18n.language === language.en && (
          <>
            <p>{t('localize-last.1')}</p>
            <p>
              <span>{t('localize-last.2')}</span>
            </p>
          </>
        )}
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
          onSeek={(currentSeek) => setSeek(currentSeek)}
          onProgress={(currentProgress) => handleProgress(currentProgress)}
          onDuration={(currentDuration) => setDuration(currentDuration)}
        />
      </div>
    </div>
  );
};

export default LocalizeLast;
