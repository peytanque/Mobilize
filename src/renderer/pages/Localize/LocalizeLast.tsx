import { FC } from 'react';

import { useHistory, useIdle, useVideo } from '@hooks';
import { Button, language } from '@components';
import { tileLastClassname } from '@pages';
import { config } from '@config';

import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';


const LocalizeLastFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p>{t('localize-last.2')}</p>
      <p><span>{t('localize-last.3')}</span></p>
    </>
  );
};

const LocalizeLastEN: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p><span>{t('localize-last.2')}</span></p>
    </>
  );
};

const LocalizeLastIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p><span>{t('localize-last.2')}</span></p>
    </>
  );
};

const LocalizeLastES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p><span>{t('localize-last.2')}</span></p>
    </>
  );
};

const LocalizeLastDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p><span>{t('localize-last.2')}</span></p>
    </>
  );
};

const LocalizeLastNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize-last.1')}</p>
      <p><span>{t('localize-last.2')}</span></p>
    </>
  );
};

export const LocalizeLast: FC = () => {
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
      {currentLanguage === language.fr && <LocalizeLastFR />}
        {currentLanguage === language.en && <LocalizeLastEN />}
        {currentLanguage === language.it && <LocalizeLastIT />}
        {currentLanguage === language.es && <LocalizeLastES />}
        {currentLanguage === language.de && <LocalizeLastDE />}
        {currentLanguage === language.nl && <LocalizeLastNL />}
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
