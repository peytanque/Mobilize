import { FC } from 'react';
import { useHistory } from '@hooks';
import { BackIcon, LockIcon } from '@icons';
import { Button, language } from '@components';
import { routes } from '@routes';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { useTranslation } from 'react-i18next';
import OverlappingCar from './../../assets/overlapping-car.png';

const ControlFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('control.1')}</p>
      <p>{t('control.2')}</p>
      <p style={{ textShadow: '0px 4px 0 black', zIndex: '2' }}>
        {t('control.3')}
      </p>
      <p>
        <span>{t('control.4')}</span>
      </p>
      <p>
        <span>{t('control.5')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
      />
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
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
      />
    </>
  );
};

const ControlIt: FC = () => {
  const { t } = useTranslation();

  return <></>;
};

export const Control: FC = () => {
  const { goPrevious } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileFirstClassname.box}>
      <div className={tileFirstClassname.back} onClick={goPrevious}>
        <BackIcon />
      </div>
      <div className={tileFirstClassname.text}>
        <LockIcon width={224} height={294} />

        {i18n.language === language.fr && <ControlFr />}
        {i18n.language === language.en && <ControlEn />}
        {i18n.language === language.it && <ControlIt />}
      </div>
      <div className={ctaClassname}>
        <Button to={routes.controlVideo}>{t('control.cta')}</Button>
      </div>
    </div>
  );
};

export default Control;
