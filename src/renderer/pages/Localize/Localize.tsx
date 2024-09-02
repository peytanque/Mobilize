import { FC } from 'react';
import { useHistory } from '@hooks';
import { BackIcon, CarIcon } from '@icons';
import { Button, language } from '@components';
import { routes } from '@routes';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { useTranslation } from 'react-i18next';
import OverlappingCar from './../../assets/overlapping-car.png';

const LocalizeFr: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize.1')}</p>
      <p>{t('localize.2')}</p>
      <p>{t('localize.3')}</p>
      <p style={{ textShadow: '-10px 5px 0px black', zIndex: '2' }}>
        <span>{t('localize.4')}</span>
      </p>
      <p>
        <span>{t('localize.5')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.twoLines} />
    </>
  );
};

const LocalizeEn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize.1')}</p>
      <p>{t('localize.2')}</p>
      <p>
        <span>{t('localize.3')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: 114 }}
      />
    </>
  );
};

const LocalizeIt: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('localize.1')}</p>
      <p>{t('localize.2')}</p>
      <p>{t('localize.3')}</p>
      <p>{t('localize.4')}</p>
      <p>
        <span>{t('localize.5')}</span>
      </p>
      <p>
        <span>{t('localize.6')}</span>
      </p>
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: -114 }}
      />
    </>
  );
};

export const Localize: FC = () => {
  const { goPrevious } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileFirstClassname.box}>
      <div className={tileFirstClassname.back} onClick={goPrevious}>
        <BackIcon />
      </div>
      <div className={tileFirstClassname.text}>
        <CarIcon width={256.1} height={292.69} />
        {i18n.language === language.fr && <LocalizeFr />}
        {i18n.language === language.en && <LocalizeEn />}
        {i18n.language === language.it && <LocalizeIt />}
      </div>
      <div className={ctaClassname}>
        <Button to={routes.localizeVideo}>{t('localize.cta')}</Button>
      </div>
    </div>
  );
};

export default Localize;
