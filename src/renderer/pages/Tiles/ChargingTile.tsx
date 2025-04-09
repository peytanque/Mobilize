import { useHistory } from '@hooks';
import { tileClassname } from './style';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, FlashIcon } from '@icons';
import { language } from '@components';

const ChargingTileFR = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span>
      </p>
      <p>{t('hub.charging.2')}</p>
      <p>{t('hub.charging.3')}</p>
    </>
  );
};

const ChargingTileEN = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span>
      </p>
      <p>{t('hub.charging.2')}</p>
      <p>{t('hub.charging.3')}</p>
    </>
  );
};

const ChargingTileIT = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span>
      </p>
      <p>{t('hub.charging.2')}</p>
      <p>{t('hub.charging.3')}</p>
    </>
  );
};

const ChargingTileES = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span>
      </p>
      <p>{t('hub.charging.2')}</p>
    </>
  );
};

const ChargingTileDE = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span>
      </p>
      <p>
        <span>{t('hub.charging.2')}</span> {t('hub.charging.3')}
      </p>
      <p>{t('hub.charging.4')}</p>
    </>
  );
};

const ChargingTileBE = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.charging.1')}</span> {t('hub.charging.2')}
      </p>
      <p>{t('hub.charging.3')}</p>
    </>
  );
};

const ChargingTile = () => {
  const { goCharging } = useHistory();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const isVerboseLanguage = currentLanguage === language.de;

  return (
    <div className={tileClassname.box} onClick={goCharging}>
      <FlashIcon width={149.19} height={169.35} />
      <div
        className={
          isVerboseLanguage ? tileClassname.verboseText : tileClassname.text
        }
      >
        {currentLanguage === language.fr && <ChargingTileFR />}
        {currentLanguage === language.en && <ChargingTileEN />}
        {currentLanguage === language.it && <ChargingTileIT />}
        {currentLanguage === language.es && <ChargingTileES />}
        {currentLanguage === language.de && <ChargingTileDE />}
        {currentLanguage === language.nl && <ChargingTileBE />}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default ChargingTile;
