import { FC, useState } from 'react';
import { VerticalSeparatorIcon } from '@icons';
import { useTranslation } from 'react-i18next';
import { SupportedLanguage } from '@config';

type Language = {
  code: string;
  name: SupportedLanguage;
};

export const language: Record<SupportedLanguage, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  it: 'it-IT',
};

const languageList: Language[] = [
  { name: 'fr', code: language.fr },
  { name: 'en', code: language.en },
  // { name: 'it', code: language.it },
];

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    i18n.language as SupportedLanguage ?? 'fr',
  );

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language.code);
    setCurrentLanguage(language.code as SupportedLanguage);
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
          className={`flex flex-row items-baseline  ${currentLanguage === language.code && 'text-white'}`}
        >
          {language.name.toUpperCase()}
          <div className="text-scropion mx-[18px]">
            {index + 1 < languageList.length && (
              <VerticalSeparatorIcon fill="#5C5C5C" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
