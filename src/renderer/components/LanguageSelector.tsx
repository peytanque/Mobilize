import { FC, useState } from 'react';
import { SlashSVG } from '../svg';
import { useTranslation } from 'react-i18next';

type Language = {
  code: string;
  name: string;
  label?: string;
};

const languageList: Language[] = [
  { name: 'en', code: 'en-US', label: 'english' },
  { name: 'fr', code: 'fr-FR', label: 'français' },
];

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language ?? "")

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language.code)
    setCurrentLanguage(language.code)
  };

  return (
    <div className="flex flex-row gap-5">
      {languageList.map((language, index) => (
        <>
          <div
            key={language.code}
            onClick={() => setLanguage(language)}
            className={`text-5xl ${currentLanguage === language.code && 'text-vermilion'}` }
          >
            {language.name.toUpperCase()}
          </div>
          {index + 1 < languageList.length && <SlashSVG />}
        </>
      ))}
    </div>
  );
};

export default LanguageSelector;
