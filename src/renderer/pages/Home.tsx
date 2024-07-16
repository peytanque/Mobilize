import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '@components';
import {
  LockIcon,
  ShareIcon,
  SlashIcon,
  FlashIcon,
  LocalizeIcon,
} from '@icons';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-width p-24">
      <LanguageSelector />
      <h1>TEST</h1>
      <LockIcon
        activeFill="green"
        isActive
        fill="pink"
        width={100}
        height={100}
      />
      <ShareIcon
        activeFill="yellow"
        isActive
        fill="red"
        width={100}
        height={100}
      />
      <SlashIcon
        activeFill="black"
        isActive
        fill="red"
        width={100}
        height={100}
      />
      <FlashIcon
        activeFill="red"
        isActive
        fill="red"
        width={100}
        height={100}
      />
      <LocalizeIcon
        activeFill="red"
        isActive
        fill="yellow"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Home;
