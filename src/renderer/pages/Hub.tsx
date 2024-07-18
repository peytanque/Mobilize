import { FC } from 'react';
import { useHistory } from '@hooks';
import { FlashIcon, LocalizeIcon, LockIcon, ShareIcon, BackIcon } from '@icons';
import { useTranslation } from 'react-i18next';

const tileClassName =
  'bg-black px-[4rem] py-[3.6rem] rounded-[2rem] flex flex-col justify-between';
const textWrapperClassName =
  'grid grid-cols-1 relative text-white font-extrabold text-[6rem] leading-[7.4rem] uppercase [&_span]:text-vermilion ';

const ShareTile = () => {
  const { goShare } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileClassName} onClick={goShare}>
      <ShareIcon />
      <div className={textWrapperClassName}>
        <p>{t('hub.share.1')}</p>
        <span>{t('hub.share.2')}</span>
      </div>
    </div>
  );
};

const ChargingTile = () => {
  const { goCharging } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileClassName} onClick={goCharging}>
      <FlashIcon />
      <div className={textWrapperClassName}>
        <p>{t('hub.charging.1')}</p>
        <span>{t('hub.charging.2')}</span>
      </div>
    </div>
  );
};

const LocalizeTile = () => {
  const { goLocalize } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileClassName} onClick={goLocalize}>
      <LocalizeIcon />
      <div className={textWrapperClassName}>
        <p>{t('hub.localize.1')}</p>
        <span>{t('hub.localize.2')}</span>
      </div>
    </div>
  );
};

const ControlTile = () => {
  const { goControl } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div className={tileClassName} onClick={goControl}>
      <LockIcon />
      <div className={textWrapperClassName}>
        <p>{t('hub.control.1')}</p>
        {i18n.language === 'fr-FR' && (
          <>
            <p>
              <span>{t('hub.control.2')}</span> {t('hub.control.3')}
            </p>
            <p>{t('hub.control.4')}</p>
          </>
        )}
        {i18n.language === 'en-US' && (
          <>
            <p>
              <span>{t('hub.control.2')}</span>
            </p>
            <p>{t('hub.control.3')}</p>
          </>
        )}
      </div>
    </div>
  );
};

export const Hub: FC = () => {
  const { goPrevious } = useHistory();

  return (
    <div className="flex h-full w-width bg-shark px-[7.2rem] py-[18.6rem]">
      <div className="absolute top-[2.8rem] left-[2.8rem]" onClick={goPrevious}>
        <BackIcon fill="white" />
      </div>
      <div className="grid grid-cols-2 h-full w-full gap-[3.7rem]">
        <ChargingTile />
        <ShareTile />
        <ControlTile />
        <LocalizeTile />
      </div>
    </div>
  );
};

export default Hub;
