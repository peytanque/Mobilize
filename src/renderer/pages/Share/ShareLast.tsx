import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const ShareLastFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p
        style={{
          contentVisibility: 'auto',
          position: 'relative',
          top: '-5px',
          backgroundColor: 'white',
          paddingBottom: '10px',
          zIndex: 2,
        }}
      >
        {t('share-last.1')}
      </p>
      <p
        style={{
          position: 'relative',
          top: '-5px',
          backgroundColor: 'white',
          paddingBottom: '10px',
          zIndex: 1,
        }}
      >
        {t('share-last.2')}
      </p>
      <p style={{ position: 'relative', top: '-5px' }}>
        <span>{t('share-last.3')}</span>
      </p>
    </>
  );
};

const ShareLastEN: FC = () => {
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

const ShareLastIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p>{t('share-last.2')}</p>
      <p>{t('share-last.3')}</p>
      <p>
        <span>{t('share-last.4')}</span>
      </p>
    </>
  );
};

const ShareLastES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p
        style={{
          backgroundColor: 'white',
          paddingBottom: '10px',
          zIndex: 1,
        }}
      >
        {t('share-last.2')}
      </p>
      <p style={{position: 'relative', top: '-5px'}}>
        <span>{t('share-last.3')}</span>
      </p>
    </>
  );
};

const ShareLastDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p style={{
          backgroundColor: 'white',
          paddingBottom: '10px',
          zIndex: 1,
        }}>{t('share-last.1')}</p>
      <p style={{position: 'relative', top: '-5px'}}>{t('share-last.2')}</p>
      <p>
        <span>{t('share-last.3')}</span>
      </p>
      <p>
        <span>{t('share-last.4')}</span>
      </p>
    </>
  );
};

const ShareLastNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share-last.1')}</p>
      <p>{t('share-last.2')}</p>
      <p>
        <span>{t('share-last.3')}</span>
      </p>
      <p>
        <span>{t('share-last.4')}</span>
      </p>
    </>
  );
};

export const ShareLast: FC = () => {
  const { isFinish, isAnimatingReset } = useIdle(
    config.redirectionTimer.lastScreen,
  );
  const { goHub } = useHistory();
  const { onProgress } = useVideo();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const isVerboseLanguage = currentLanguage === language.de;

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileLastClassname.box}>
      <div className={isVerboseLanguage ? tileLastClassname.verboseText : tileLastClassname.text}>
        {currentLanguage === language.fr && <ShareLastFR />}
        {currentLanguage === language.en && <ShareLastEN />}
        {currentLanguage === language.it && <ShareLastIT />}
        {currentLanguage === language.es && <ShareLastES />}
        {currentLanguage === language.de && <ShareLastDE />}
        {currentLanguage === language.nl && <ShareLastNL />}
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
