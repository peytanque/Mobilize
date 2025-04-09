import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, ShareIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ShareFR: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('share.1')}</span>
        </p>
      <p>
        {t('share.2')}
      </p>
      <p>
        {t('share.3')}
      </p>
      <img src={OverlappingCar} className={overlapping.secondLine} />
    </>
  );
};

const ShareEN: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('share.1')}</p>
      <p>
        <span>{t('share.2')}</span>
      </p>
      <p>
        <span>{t('share.3')}</span>
      </p>
      <img src={OverlappingCar} className={overlapping.secondLine} />
    </>
  );
};

const ShareIT: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p><span>{t('share.1')}</span></p>
      <p style={{ backgroundColor: 'black', zIndex: 1, paddingBottom: '11px' }}>
        {t('share.2')}
      </p>
      <p style={{position: 'relative', top: '-5px'}}>
        {t('share.3')}
      </p>
      <img src={OverlappingCar} className={overlapping.secondLine} />
    </>
  );
};

const ShareES: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('share.1')}</span>
      </p>
      <p>{t('share.2')}</p>
      <p>{t('share.3')}</p>
      <img src={OverlappingCar} className={overlapping.secondLine} />
    </>
  );
};

const ShareDE: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('share.1')}</span>
      </p>
      <p>{t('share.2')}</p>
      <p>{t('share.3')}</p>
      <img src={OverlappingCar} className={overlapping.secondLine} />
    </>
  );
};

const ShareNL: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('share.1')}</span>
      </p>
      <p>
        <span>{t('share.2')}</span>
      </p>
      <p>{t('share.3')}</p>
      <img src={OverlappingCar} className={overlapping.thirdLine} />
    </>
  );
};

export const Share: FC = () => {
  const { goHub, goShareVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

  const currentLanguage = i18n.language;

  if (isFinish) {
    goHub();
  }

  return (
    <div className={tileFirstClassname.box} onClick={goShareVideo}>
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
        <ShareIcon width={326.67} height={294} />
        {currentLanguage === language.fr && <ShareFR />}
        {currentLanguage === language.en && <ShareEN />}
        {currentLanguage === language.it && <ShareIT />}
        {currentLanguage === language.es && <ShareES />}
        {currentLanguage === language.de && <ShareDE />}
        {currentLanguage === language.nl && <ShareNL />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goShareVideo}>{t('share.cta')}</Button>
      </div>
    </div>
  );
};

export default Share;
