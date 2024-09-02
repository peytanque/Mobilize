import { FC, useEffect } from 'react';
import { useHistory } from '@hooks';
import {
  FlashIcon,
  CarIcon,
  LockIcon,
  ShareIcon,
  HomeIcon,
  ArrowRightIcon,
} from '@icons';
import { useTranslation } from 'react-i18next';
import { language, LanguageSelector } from '@components';

const hubClassname = {
  page: 'flex h-full w-width bg-black px-[7.2rem] py-[18.6rem]',
  back: 'absolute top-[57px] left-[75px] [&_svg]:fill-white',
  grid: 'grid grid-cols-2 h-full w-full gap-[3.7rem]',
  item: {
    box: 'bg-mineShaft pl-[43px] pt-[117px] pb-[98px] rounded-[2rem] flex flex-col justify-between [&_svg]:fill-white',
    text: 'flex flex-col uppercase [&_p]:font-bold [&_p]:text-white [&_p]:font-bold [&_p]:text-[72px] [&_p]:leading-[64px] [&_span]:text-vermilion [&_svg]:fill-white [&_svg]:mt-[25px]',
  },
};

const ControlTile = () => {
  const { goControl } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={hubClassname.item.box} onClick={goControl}>
      <LockIcon />
      <div className={hubClassname.item.text}>
        {i18n.language === language.it ? (
          <>
            <p>
              <span>{t('hub.control.1')}</span>
            </p>
            <p>
              <span>{t('hub.control.2')}</span>
            </p>
          </>
        ) : (
          <>
            <p>
              <span>{t('hub.control.1')}</span>
            </p>
            <p>{t('hub.control.2')}</p>
          </>
        )}
        {t('hub.control.3') && <p>{t('hub.control.3')}</p>}
        {i18n.language === language.it && <p>{t('hub.control.4')}</p>}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

const ShareTile = () => {
  const { goShare } = useHistory();
  const { t } = useTranslation();

  return (
    <div className={hubClassname.item.box} onClick={goShare}>
      <ShareIcon />
      <div className={hubClassname.item.text}>
        {t('hub.share.1') && (
          <p>
            <span>{t('hub.share.1')}</span>
          </p>
        )}
        {t('hub.share.2') && <p>{t('hub.share.2')}</p>}
        {t('hub.share.3') && <p>{t('hub.share.3')}</p>}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

const ChargingTile = () => {
  const { goCharging } = useHistory();
  const { t } = useTranslation();

  return (
    <div className={hubClassname.item.box} onClick={goCharging}>
      <FlashIcon />
      <div className={hubClassname.item.text}>
        {t('hub.charging.1') && (
          <p>
            <span>{t('hub.charging.1')}</span>
          </p>
        )}
        {t('hub.charging.2') && <p>{t('hub.charging.2')}</p>}
        {t('hub.charging.3') && <p>{t('hub.charging.3')}</p>}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

const LocalizeTile = () => {
  const { goLocalize } = useHistory();
  const { t } = useTranslation();

  return (
    <div className={hubClassname.item.box} onClick={goLocalize}>
      <CarIcon />
      <div className={hubClassname.item.text}>
        {t('hub.localize.1') && (
          <p>
            <span>{t('hub.localize.1')}</span>
          </p>
        )}
        {t('hub.localize.2') && <p>{t('hub.localize.2')}</p>}
        {t('hub.localize.3') && <p>{t('hub.localize.3')}</p>}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export const Hub: FC = () => {
  const { goHome } = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      goHome()
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <div className={hubClassname.page}>
      <LanguageSelector />

      <div className={hubClassname.back} onClick={goHome}>
        <HomeIcon />
      </div>
      <div className={hubClassname.grid}>
        <ControlTile />
        <ChargingTile />
        <ShareTile />
        <LocalizeTile />
      </div>
    </div>
  );
};

export default Hub;
