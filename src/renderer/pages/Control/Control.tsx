import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, LockIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ControlFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('control.1')}</span>
      </p>
      <p>
        <span>{t('control.2')}</span>
      </p>
      <p style={{ backgroundColor: 'black', paddingBottom: '11px', zIndex: 1 }}>
        <span>{t('control.3')}</span>
      </p>
      <p style={{ position: 'relative', top: '-5px' }}>{t('control.4')}</p>
      <p>{t('control.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ControlEN: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control.1')}</p>
      <p>{t('control.2')}</p>
      <p>{t('control.3')}</p>
      <p>
        <span>{t('control.4')}</span>
      </p>
      <p>
        <span>{t('control.5')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ControlIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('control.1')}</span>
      </p>
      <p>
        <span>{t('control.2')}</span>
      </p>
      <p>
        <span>{t('control.3')}</span>
      </p>
      <p>{t('control.4')}</p>
      <p>{t('control.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ControlES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p style={{ backgroundColor: 'black', paddingBottom: '11px', zIndex: 1 }}>
        <span>{t('control.1')}</span>
      </p>
      <p style={{position: 'relative', top: '-5px'}}>
        <span>{t('control.2')}</span>
      </p>
      <p
        style={{ backgroundColor: 'black', paddingBottom: '11px', zIndex: '5' }}
      >
        <span>{t('control.3')}</span>
      </p>
      <p
        style={{
          position: 'relative',
          top: '-5px',
          backgroundColor: 'black',
          paddingBottom: '11px',
          zIndex: '4',
        }}
      >
        {t('control.4')}
      </p>
      <p style={{ position: 'relative', top: '-10px' }}>{t('control.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ControlDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('control.1')}</span>
      </p>
      <p>
        <span>{t('control.2')}</span>
      </p>
      <p
        style={{ backgroundColor: 'black', paddingBottom: '11px', zIndex: '5' }}
      >
        <span>{t('control.3')}</span>
      </p>
      <p style={{ position: 'relative', top: '-5px' }}>{t('control.4')}</p>
      <p>{t('control.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ControlNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('control.1')}</span>
      </p>
      <p>
        <span>{t('control.2')}</span>
      </p>
      <p>
        <span>{t('control.3')}</span>
      </p>
      <p>{t('control.4')}</p>
      <p>{t('control.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

export const Control: FC = () => {
  const { goHub, goControlVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

  const currentLanguage = i18n.language;

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileFirstClassname.box} onClick={goControlVideo}>
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
        <LockIcon width={224} height={294} />
        {currentLanguage === language.fr && <ControlFR />}
        {currentLanguage === language.en && <ControlEN />}
        {currentLanguage === language.it && <ControlIT />}
        {currentLanguage === language.es && <ControlES />}
        {currentLanguage === language.de && <ControlDE />}
        {currentLanguage === language.nl && <ControlNL />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goControlVideo}>{t('control.cta')}</Button>
      </div>
    </div>
  );
};

export default Control;
