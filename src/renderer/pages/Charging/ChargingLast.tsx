import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const ChargingLastFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p
        style={{
          backgroundColor: 'white',
          paddingBottom: '11px',
          zIndex: '1',
        }}
      >
        {t('charging-last.1')}
      </p>
      <p style={{ position: 'relative', top: '-5px' }}>
        {t('charging-last.2')}
      </p>
      <p>
        <span>{t('charging-last.3')}</span>
      </p>
    </>
  );
};

const ChargingLastEN: FC = () => {
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

const ChargingLastIT: FC = () => {
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

const ChargingLastES: FC = () => {
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

const ChargingLastDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging-last.1')}</p>
      <p>
        <span>{t('charging-last.2')}</span>
      </p>
      <p>
        <span>{t('charging-last.3')}</span>
      </p>
    </>
  );
};

const ChargingLastNL: FC = () => {
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

export const ChargingLast: FC = () => {
  const { isFinish, isAnimatingReset } = useIdle(
    config.redirectionTimer.lastScreen,
  );
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
        {currentLanguage === language.fr && <ChargingLastFR />}
        {currentLanguage === language.en && <ChargingLastEN />}
        {currentLanguage === language.it && <ChargingLastIT />}
        {currentLanguage === language.es && <ChargingLastES />}
        {currentLanguage === language.de && <ChargingLastDE />}
        {currentLanguage === language.nl && <ChargingLastNL />}
      </div>
      <div className={tileLastClassname.button}>
        <Button
          onClick={goHub}
          timeout={config.redirectionTimer.lastScreen}
          isAnimatingReset={isAnimatingReset}
        >
          {t('charging-last.cta')}
        </Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={config.videos.chargingLast.path}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default ChargingLast;
