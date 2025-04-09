import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, FlashIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ChargingFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('charging.1')}</span>
      </p>
      <p>
        <span>{t('charging.2')}</span>
      </p>
      <p>{t('charging.3')}</p>
      <p>{t('charging.4')}</p>
      <img src={OverlappingCar} className={overlapping.thirdLine} />
    </>
  );
};

const ChargingEN: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging.1')}</p>
      <p>{t('charging.2')}</p>
      <p>{t('charging.3')}</p>
      <p>
        <span>{t('charging.4')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ChargingIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('charging.1')}</span>
      </p>
      <p>
        <span>{t('charging.2')}</span>
      </p>
      <p>
        <span>{t('charging.3')}</span>
      </p>
      <p>{t('charging.4')}</p>
      <p>{t('charging.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ChargingES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('charging.1')}</span>
      </p>
      <p
        style={{ backgroundColor: 'black', paddingBottom: '11px', zIndex: '1' }}
      >
        <span>{t('charging.2')}</span>
      </p>
      <p style={{ position: 'relative', top: '-5px' }}>{t('charging.3')}</p>
      <p>{t('charging.4')}</p>
      <img src={OverlappingCar} className={overlapping.thirdLine} />
    </>
  );
};

const ChargingDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('charging.1')}</span>
      </p>
      <p>
        <span>{t('charging.2')}</span>
      </p>
      <p>
        <span>{t('charging.3')}</span>
      </p>
      <p>{t('charging.4')}</p>
      <p>{t('charging.5')}</p>
      <img src={OverlappingCar} className={overlapping.fourthLine} />
    </>
  );
};

const ChargingNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('charging.1')}</span>
      </p>
      <p>
        <span>{t('charging.2')}</span>
      </p>
      <p>{t('charging.3')}</p>
      <p>{t('charging.4')}</p>
      <img src={OverlappingCar} className={overlapping.thirdLine} />
    </>
  );
};

export const Charging: FC = () => {
  const { goHub, goChargingVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

  const currentLanguage = i18n.language;

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
        {currentLanguage === language.fr && <ChargingFR />}
        {currentLanguage === language.en && <ChargingEN />}
        {currentLanguage === language.it && <ChargingIT />}
        {currentLanguage === language.es && <ChargingES />}
        {currentLanguage === language.de && <ChargingDE />}
        {currentLanguage === language.nl && <ChargingNL />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goChargingVideo}>{t('charging.cta')}</Button>
      </div>
    </div>
  );
};

export default Charging;
