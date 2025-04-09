import { useHistory } from '@hooks';
import { tileClassname } from './style';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, ShareIcon } from '@icons';
import { language } from '@components';

const ShareTileFR = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.share.1')}</span>
      </p>
      <p>{t('hub.share.2')}</p>
      <p>{t('hub.share.3')}</p>
    </>
  );
};

const ShareTileEN = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.share.1')}</span>
      </p>
      <p>{t('hub.share.2')}</p>
      <p>{t('hub.share.3')}</p>
    </>
  );
};

const ShareTileIT = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.share.1')}</span>
      </p>
      <p>{t('hub.share.2')}</p>
      <p>{t('hub.share.3')}</p>
    </>
  );
};

const ShareTileES = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.share.1')}</span>
      </p>
      <p>{t('hub.share.2')}</p>
    </>
  );
};

const ShareTileDE = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <span>{t('hub.share.1')}</span>
      </p>
      <p>
        <span>{t('hub.share.2')}</span> {t('hub.share.3')}
      </p>
      <p>{t('hub.share.4')}</p>
    </>
  );
};

const ShareTileNL = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('hub.share.1')}</p>
      <p>
        <span>{t('hub.share.2')}</span>
      </p>
    </>
  );
};

const ShareTile = () => {
  const { goShare } = useHistory();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isVerboseLanguage = currentLanguage === language.de;

  return (
    <div className={tileClassname.box} onClick={goShare}>
      <ShareIcon width={169.33} height={177.41} />
      <div
        className={
          isVerboseLanguage ? tileClassname.verboseText : tileClassname.text
        }
      >
        {currentLanguage === language.fr && <ShareTileFR />}
        {currentLanguage === language.en && <ShareTileEN />}
        {currentLanguage === language.it && <ShareTileIT />}
        {currentLanguage === language.es && <ShareTileES />}
        {currentLanguage === language.de && <ShareTileDE />}
        {currentLanguage === language.nl && <ShareTileNL />}
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default ShareTile;
