import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

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
        {i18n.language === language.fr && <ControlLastFr />}
        {i18n.language === language.en && <ControlLastEn />}
        {i18n.language === language.it && <ControlLastIt />}
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
