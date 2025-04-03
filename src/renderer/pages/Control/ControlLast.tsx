import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const ControlLastFR: FC = () => {
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

const ControlLastEN: FC = () => {
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

const ControlLastIT: FC = () => {
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

const ControlLastES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>{t('control-last.2')}</p>
      <p>
        <span>{t('control-last.3')}</span>
      </p>
    </>
  );
};

const ControlLastDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>{t('control-last.2')}</p>
      <p>
        <span>{t('control-last.3')}</span>
      </p>
    </>
  );
};

const ControlLastNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control-last.1')}</p>
      <p>{t('control-last.2')}</p>
      <p>
        <span>{t('control-last.3')}</span>
      </p>
      <p>
        <span>{t('control-last.4')}</span>
      </p>
    </>
  );
};


export const ControlLast: FC = () => {
  const { isFinish, isAnimatingReset } = useIdle(config.redirectionTimer.lastScreen);
  const { goHub } = useHistory();
  const { onProgress } = useVideo();
  
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileLastClassname.box}>
      <div className={tileLastClassname.text}>
        {currentLanguage === language.fr && <ControlLastFR />}
        {currentLanguage === language.en && <ControlLastEN />}
        {currentLanguage === language.it && <ControlLastIT />}
        {currentLanguage === language.es && <ControlLastES />}
        {currentLanguage === language.de && <ControlLastDE />}
        {currentLanguage === language.nl && <ControlLastNL />}
      </div>
      <div className={tileLastClassname.button}>
        <Button
          onClick={goHub}
          timeout={config.redirectionTimer.lastScreen}
          isAnimatingReset={isAnimatingReset}
        >
          {t('control-last.cta')}
        </Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={config.videos.controlLast.path}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ControlLast;
