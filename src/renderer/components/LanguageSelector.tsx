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
    <div className="absolute top-[5.8rem] left-[7.3rem] flex flex-row items-center justify-center">
      {languageList.map((language, index) => (
        <div
          key={language.code}
          onClick={() => setLanguage(language)}
          className={`text-5xl flex flex-row items-center ${currentLanguage === language.code && 'text-vermilion'}`}
        >
          {language.name.toUpperCase()}
          {index + 1 < languageList.length && <SlashIcon className="mx-5" />}
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
