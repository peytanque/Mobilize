import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';


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
        {i18n.language === language.fr && <LocalizeLastFr />}
        {i18n.language === language.en && <LocalizeLastEn />}
        {i18n.language === language.it && <LocalizeLastIt />}
      </div>
      <div className={tileLastClassname.button}>
        <Button
          onClick={goHub}
          timeout={config.redirectionTimer.lastScreen}
          isAnimatingReset={isAnimatingReset}
        >
          {t('localize-last.cta')}
        </Button>
      </div>
      <div className={tileLastClassname.player}>
        <ReactPlayer
          playing={true}
          width={1080}
          height={1920}
          muted
          url={config.videos.localizeLast.path}
          onProgress={(currentProgress) => onProgress(currentProgress)}
        />
      </div>
    </div>
  );
};

export default LocalizeLast;
