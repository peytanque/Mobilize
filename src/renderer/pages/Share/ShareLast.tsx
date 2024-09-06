import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const ShareLastFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p
        style={{
          borderBottom: '6px solid white',
          textShadow: '-10px 4px 0px white',
          zIndex: '3',
        }}
      >
        {t('share-last.1')}
      </p>
      <p
        style={{
          borderBottom: '6px solid white',
          textShadow: '0px 4px 0 white',
          zIndex: '2',
        }}
      >
        {t('share-last.2')}
      </p>
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
  const { isFinish, isAnimatingReset } = useIdle(config.redirectionTimer.lastScreen);
  const { goHub } = useHistory();
  const { onProgress } = useVideo();

  const { t, i18n } = useTranslation();

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileLastClassname.box}>
      <div className={tileLastClassname.text}>
        {i18n.language === language.fr && <ShareLastFr />}
        {i18n.language === language.en && <ShareLastEn />}
        {i18n.language === language.it && <ShareLastIt />}
      </div>
      <div className={tileLastClassname.button}>
        <Button
          onClick={goHub}
          timeout={config.redirectionTimer.lastScreen}
          isAnimatingReset={isAnimatingReset}
        >
          {t('share-last.cta')}
        </Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={config.videos.shareLast.path}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ShareLast;
