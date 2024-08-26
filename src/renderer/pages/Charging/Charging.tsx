import { FC } from 'react';
import { useHistory } from '@hooks';
import { BackIcon, FlashIcon } from '@icons';
import { Button, language } from '@components';
import { routes } from '@routes';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { useTranslation } from 'react-i18next';
import OverlappingCar from './../../assets/overlapping-car.png';

const ChargingFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('charging.1')}</p>
      <p>{t('charging.2')}</p>
      <p><span>{t('charging.3')}</span></p>
      <p><span>{t('charging.4')}</span></p>
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{marginBottom: 114}}
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
      <p><span>{t('charging.4')}</span></p>
      <img
        src={OverlappingCar}
        className={overlapping.oneLine}
        style={{marginBottom: 114}}
      />
    </>
  );
};

const ChargingIt: FC = () => {
  const { t } = useTranslation();

  return <></>;
};

export const Charging: FC = () => {
  const { goPrevious } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileFirstClassname.box}>
      <div className={tileFirstClassname.back} onClick={goPrevious}>
        <BackIcon />
      </div>
      <div className={tileFirstClassname.text}>
        <FlashIcon width={259.16} height={294} />
        {i18n.language === language.fr && <ChargingFr />}
        {i18n.language === language.en && <ChargingEn />}
        {i18n.language === language.it && <ChargingIt />}
      </div>
      <div className={ctaClassname}>
        <Button to={routes.chargingVideo}>{(t('charging.cta'))}</Button>
      </div>
    </div>
  );
};

export default Charging;
