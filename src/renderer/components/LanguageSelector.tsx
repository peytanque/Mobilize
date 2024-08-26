import { FC, useState } from 'react';
import { SlashIcon } from '@icons';
import { useTranslation } from 'react-i18next';

type SupportedLanguages = 'fr' | 'en' | 'it'

type Language = {
  code: string;
  name: string;
};

export const language: Record<SupportedLanguages, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  it: 'it-IT',
};

const languageList: Language[] = [
  { name: 'fr', code: language.fr },
  { name: 'en', code: language.en },
  { name: 'it', code: language.it },
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
    <div className="absolute top-[58px] right-[70px] flex flex-row items-center justify-center text-scropion text-[50px] font-bold z-10">
      {languageList.map((language, index) => (
        <div
          key={language.code}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setLanguage(language);
            e.stopPropagation();
          }}
          // onClick={() => setLanguage(language)}
          className={`flex flex-row items-center  ${currentLanguage === language.code && 'text-white'}`}
        >
          {language.name.toUpperCase()}
          <div className="text-scropion mx-[8px]">
            {index + 1 < languageList.length && <SlashIcon fill="#5C5C5C" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
