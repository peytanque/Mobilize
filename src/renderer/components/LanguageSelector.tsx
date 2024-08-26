import { FC, useState } from 'react';
import { SlashIcon } from '@icons';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
  label?: string;
};

const languageList: Language[] = [
  { name: 'fr', code: 'fr-FR', label: 'français' },
  { name: 'en', code: 'en-US', label: 'english' },
  { name: 'it', code: 'it-IT', label: 'italian' },
];

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    i18n.language ?? '',
  );

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language.code);
  };

  return (
    <div className="absolute top-[58px] right-[70px] flex flex-row items-center justify-center text-scropion text-[50px] font-bold">
      {languageList.map((language, index) => (
        <div
          key={language.code}
          onClick={() => setLanguage(language)}
          className={`flex flex-row items-center  ${currentLanguage === language.code && 'text-white'}`}
        >
          {language.name.toUpperCase()}
          <div className='text-scropion mx-[8px]'>

          {index + 1 < languageList.length && <SlashIcon fill="#5C5C5C" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
