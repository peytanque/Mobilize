import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, LockIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ControlFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control.1')}</p>
      <p>{t('control.2')}</p>
      <p style={{ textShadow: '0px 7px 0 black', zIndex: '2' }}>
        {t('control.3')}
      </p>
      <p>
        <span>{t('control.4')}</span>
      </p>
      <p>
        <span>{t('control.5')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.twoLines} />
    </>
  );
};

const ControlEn: FC = () => {
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
      <img src={OverlappingCar} className={overlapping.twoLines} />
    </>
  );
};

const ControlIt: FC = () => {
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
      <img src={OverlappingCar} className={overlapping.twoLines} />
    </>
  );
};

export const Control: FC = () => {
  const { goHub, goControlVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

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
        {i18n.language === language.fr && <ControlFr />}
        {i18n.language === language.en && <ControlEn />}
        {i18n.language === language.it && <ControlIt />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goControlVideo}>{t('control.cta')}</Button>
      </div>
    </div>
  );
};

export default Control;
