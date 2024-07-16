import { FC } from 'react';
import { SlashSVG } from '../svg';

type Language = {
  code: string;
  name: string;
};

const languageList: Language[] = [
  { code: 'en', name: 'english' },
  { code: 'fr', name: 'français' },
];

const toggleLanguage = (language: Language) => {
  console.log('selectedL', language);
};

export const LanguageSelector: FC = () => {
  return (
    <div className="flex flex-row">
      {languageList.map((language, index) => (
        <>
          <div key={language.name} onClick={() => toggleLanguage(language)} className='text-5xl	'>
            {language.code.toUpperCase()}
          </div>
          {index + 1 < languageList.length && <SlashSVG />}
        </>
      ))}
    </div>
  );
};

export default LanguageSelector;
