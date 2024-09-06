import { FC } from 'react';

import { useHistory, useIdle } from '@hooks';
import { BackIcon, ShareIcon } from '@icons';
import { Button, language } from '@components';
import { ctaClassname, overlapping, tileFirstClassname } from '@pages';
import { config } from '@config';

import { useTranslation } from 'react-i18next';

import OverlappingCar from './../../assets/overlapping-car.png';

const ShareFr: FC = () => {
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
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: 228 }}
      />
    </>
  );
};

const ShareEn: FC = () => {
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
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: 228 }}
      />
    </>
  );
};

const ShareIt: FC = () => {
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
      <img
        src={OverlappingCar}
        className={overlapping.twoLines}
        style={{ marginBottom: 228 }}
      />
    </>
  );
};

export const Share: FC = () => {
  const { goHub, goShareVideo } = useHistory();
  const { t, i18n } = useTranslation();
  const { isFinish } = useIdle(config.redirectionTimer.firstScreen);

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
        {i18n.language === language.fr && <ShareFr />}
        {i18n.language === language.en && <ShareEn />}
        {i18n.language === language.it && <ShareIt />}
      </div>
      <div className={ctaClassname}>
        <Button onClick={goShareVideo}>{t('share.cta')}</Button>
      </div>
    </div>
  );
};

export default Share;
