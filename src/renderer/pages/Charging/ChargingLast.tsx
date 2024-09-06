import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const ChargingLastFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p
        style={{
          borderBottom: '6px solid white',
          textShadow: '0px 4px 0 white',
          zIndex: '2',
        }}
      >
        {t('charging-last.1')}
      </p>
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
        {i18n.language === language.fr && <ChargingLastFr />}
        {i18n.language === language.en && <ChargingLastEn />}
        {i18n.language === language.it && <ChargingLastIt />}
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
