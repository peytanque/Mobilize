import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, FlashIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ChargingFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging.1')}</p>
      <p>{t('charging.2')}</p>
      <p>
        <span>{t('charging.3')}</span>
      </p>
      <p>
        <span>{t('charging.4')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: 114 }}
      />
    </>
  );
};

const ChargingEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging.1')}</p>
      <p>{t('charging.2')}</p>
      <p>{t('charging.3')}</p>
      <p>
        <span>{t('charging.4')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.oneLine}
        style={{ marginBottom: 114 }}
      />
    </>
  );
};

const ChargingIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging.1')}</p>
      <p>{t('charging.2')}</p>
      <p>{t('charging.3')}</p>
      <p>
        <span>{t('charging.4')}</span>
      </p>
      <p>
        <span>{t('charging.5')}</span>
      </p>
      <p>
        <span>{t('charging.6')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.oneLine}
        style={{ marginBottom: 114 }}
      />
    </>
  );
};

export const Charging: FC = () => {
  const { goHub, goChargingVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileFirstClassname.box} onClick={goChargingVideo}>
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
        <FlashIcon width={259.16} height={294} />
        {i18n.language === language.fr && <ChargingFr />}
        {i18n.language === language.en && <ChargingEn />}
        {i18n.language === language.it && <ChargingIt />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goChargingVideo}>{t('charging.cta')}</Button>
      </div>
    </div>
  );
};

export default Charging;
