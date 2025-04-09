import { FC, useEffect, useRef, useState } from 'react';
import { BottomCaret } from '@icons';
import { useTranslation } from 'react-i18next';

export type SupportedLanguage = 'fr' | 'en' | 'it' | 'es' | 'de' | 'nl';

type Language = {
  code: string;
  name: SupportedLanguage;
};

export const language: Record<SupportedLanguage, string> = {
  fr: 'fr-FR',
  it: 'it-IT',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
  nl: 'nl-BE',
};

const languageList: Language[] = [
  { name: 'it', code: language.it },
  { name: 'fr', code: language.fr },
  { name: 'en', code: language.en },
  { name: 'es', code: language.es },
  { name: 'de', code: language.de },
  { name: 'nl', code: language.nl },
];

export const LanguageSelector: FC = () => {
  const [listToggled, setListToggled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();

  const i18nCurrentLanguage: Language = languageList.filter(
    (language) => language.code === i18n.language,
  )[0];

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setListToggled(false);
    }
  };

  const handleClickInside = () => {
    setListToggled(!listToggled);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    i18nCurrentLanguage ?? languageList[0],
  );

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language.code);
    setListToggled(false);
    setCurrentLanguage(language);
  };

  const commonStyle =
    'text-[50px] font-bold  uppercase bg-mineShaft px-[25px] py-[10px] leading-[60px]';

  const selectedValueStyle = `flex flex-row items-center gap-[14px] text-white ${commonStyle}`;
  const selectableValueStyle = `flex justify-center flex-row items-center gap-[14px] text-[#424242] border-t-[3px] border-black  ${commonStyle}`;

  // asc - selectedValue
  const sortedLanguages = languageList
    .filter((language) => language.name !== currentLanguage.name)
    .sort((key, val) => key.name.localeCompare(val.name));

  return (
    <div
      className="absolute z-20 top-[55px] right-[73px] border-[3px] border-black rounded-[6px]"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        // évite la redirection auto sur les écrans concernés
        e.stopPropagation();
      }}
      ref={ref}
    >
      <div className={selectedValueStyle} onClick={handleClickInside}>
        <div>{currentLanguage.name}</div>
        <div
          className={`transform transition-transform duration-300 ${listToggled ? 'rotate-180' : 'rotate-0'}`}
        >
          <BottomCaret fill="white" />
        </div>
      </div>

      {listToggled &&
        sortedLanguages
          .map((language) => (
            <div
              key={language.code}
              className={selectableValueStyle}
              onClick={() => setLanguage(language)}
            >
              {language.name}
            </div>
          ))}
    </div>
  );
};

export default LanguageSelector;
