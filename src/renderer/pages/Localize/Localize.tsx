import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, CarIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const LocalizeFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p><span>{t('localize.1')}</span></p>
      <p><span>{t('localize.2')}</span></p>
      <p><span>{t('localize.3')}</span></p>
      <p style={{backgroundColor: 'black', zIndex: 1, paddingBottom: '11px'}}>{t('localize.4')}</p>
      <p style={{position: 'relative', top: '-5px'}}>{t('localize.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const LocalizeEN: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize.1')}</p>
      <p>{t('localize.2')}</p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.thirdLine} />
    </>
  );
};

const LocalizeIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('localize.1')}</span>
      </p>
      <p>
        <span>{t('localize.2')}</span>
      </p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <p>{t('localize.4')}</p>
      <p>{t('localize.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const LocalizeES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('localize.1')}</span>
      </p>
      <p>
        <span>{t('localize.2')}</span>
      </p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <p>{t('localize.4')}</p>
      <p>{t('localize.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const LocalizeDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('localize.1')}</span>
      </p>
      <p>
        <span>{t('localize.2')}</span>
      </p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <p>{t('localize.4')}</p>
      <p>{t('localize.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const LocalizeNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('localize.1')}</span>
      </p>
      <p>
        <span>{t('localize.2')}</span>
      </p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <p>{t('localize.4')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

export const Localize: FC = () => {
  const { goHub, goLocalizeVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

  const currentLanguage = i18n.language;

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileFirstClassname.box} onClick={goLocalizeVideo}>
      <div
        className={tileFirstClassname.back}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          goHub();
          e.stopPropagation();
        }}
      >
        <BackIcon />
      </div>
      <div className={tileFirstClassname.text}>
        <CarIcon width={256.1} height={292.69} />
        {currentLanguage === language.fr && <LocalizeFR />}
        {currentLanguage === language.en && <LocalizeEN />}
        {currentLanguage === language.it && <LocalizeIT />}
        {currentLanguage === language.es && <LocalizeES />}
        {currentLanguage === language.de && <LocalizeDE />}
        {currentLanguage === language.nl && <LocalizeNL />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goLocalizeVideo}>{t('localize.cta')}</Button>
      </div>
    </div>
  );
};

export default Localize;
