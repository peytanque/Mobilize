import { useHistory } from '@hooks';
import { tileClassname } from './style';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, CarIcon } from '@icons';
import { language } from '@components';

const LocalizeTileFR = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.localize.1')}</span>
      </p>
      <p>{t('hub.localize.2')}</p>
      <p>{t('hub.localize.3')}</p>
    </>
  );
};

const LocalizeTileEN = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.localize.1')}</span>
      </p>
      <p>{t('hub.localize.2')}</p>
      <p>{t('hub.localize.3')}</p>
    </>
  );
};

const LocalizeTileIT = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.localize.1')}</span>
      </p>
      <p>{t('hub.localize.2')}</p>
      <p>{t('hub.localize.3')}</p>
    </>
  );
};

const LocalizeTileES = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.localize.1')}</span>
      </p>
      <p>{t('hub.localize.2')}</p>
    </>
  );
};

const LocalizeTileDE = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.localize.1')}</span>
      </p>
      <p>
        <span>{t('hub.localize.2')}</span> {t('hub.localize.3')}
      </p>
      <p>{t('hub.localize.4')}</p>
    </>
  );
};

const LocalizeTileNL = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('hub.localize.1')}</p>
      <p>{t('hub.localize.2')}</p>
      <p>
        <span>{t('hub.localize.3')}</span>
      </p>
    </>
  );
};

const LocalizeTile = () => {
  const { goLocalize } = useHistory();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isVerboseLanguage = currentLanguage === language.de;

  return (
    <div className={tileClassname.box} onClick={goLocalize}>
      <CarIcon width={159.27} height={169.35} />
      <div
        className={
          isVerboseLanguage ? tileClassname.verboseText : tileClassname.text
        }
      >
        {currentLanguage === language.fr && <LocalizeTileFR />}
        {currentLanguage === language.en && <LocalizeTileEN />}
        {currentLanguage === language.it && <LocalizeTileIT />}
        {currentLanguage === language.es && <LocalizeTileES />}
        {currentLanguage === language.de && <LocalizeTileDE />}
        {currentLanguage === language.nl && <LocalizeTileNL />}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default LocalizeTile;
