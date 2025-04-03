import { useHistory } from '@hooks';
import { tileClassname } from './style';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, LockIcon } from '@icons';
import { language } from '@components';

const ControlTileFR = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span>
      </p>
      <p style={{textShadow: '0px 4.5px 0 #1F1F1F', zIndex: '2'}}>{t('hub.control.2')}</p>
      <p>{t('hub.control.3')}</p>
    </>
  );
};

const ControlTileEN = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span>
      </p>
      <p>{t('hub.control.2')}</p>
      <p>{t('hub.control.3')}</p>
    </>
  );
};

const ControlTileIT = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span> {t('hub.control.2')}
      </p>
      <p>{t('hub.control.3')}</p>
      <p>{t('hub.control.4')}</p>
    </>
  );
};


const ControlTileES = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span>
      </p>
      <p>{t('hub.control.2')}</p>
      <p>{t('hub.control.3')}</p>
      <p>{t('hub.control.4')}</p>
    </>
  );
};

const ControlTileDE = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span>
      </p>
      <p>{t('hub.control.2')}</p>
      <p>{t('hub.control.3')}</p>
    </>
  );
};

const ControlTileNL = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.control.1')}</span> {t('hub.control.2')}
      </p>
      <p>{t('hub.control.3')}</p>
      <p>{t('hub.control.4')}</p>
    </>
  );
};

const ControlTile = () => {
  const { goControl } = useHistory();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isVerboseLanguage = currentLanguage === language.de;

  return (
    <div className={tileClassname.box} onClick={goControl}>
      <LockIcon width={129.03} height={169.35} />
      <div
        className={
          isVerboseLanguage ? tileClassname.verboseText : tileClassname.text
        }
      >
        {currentLanguage === language.fr && <ControlTileFR />}
        {currentLanguage === language.en && <ControlTileEN />}
        {currentLanguage === language.it && <ControlTileIT />}
        {currentLanguage === language.es && <ControlTileES />}
        {currentLanguage === language.de && <ControlTileDE />}
        {currentLanguage === language.nl && <ControlTileNL />}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default ControlTile;
