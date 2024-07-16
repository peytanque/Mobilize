import { FC } from 'react';
import { LanguageSelector } from '../components';

export const Home: FC = () => {
  return (
    <div className="h-full w-width p-24">
      <LanguageSelector />
      Homepage
    </div>
  );
};

export default Home;
