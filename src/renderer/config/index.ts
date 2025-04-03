// Share
import ShareVideoFR from './../assets/videos/fr-share.mp4';
import ShareVideoEN from './../assets/videos/en-share.mp4';
import ShareVideoIT from './../assets/videos/it-share.mp4';
import ShareVideoES from './../assets/videos/es-share.mp4';
import ShareVideoDE from './../assets/videos/de-share.mp4';
import ShareVideoNL from './../assets/videos/nl-share.mp4';

// Control
import ControlVideoFR from './../assets/videos/fr-control.mp4';
import ControlVideoEN from './../assets/videos/en-control.mp4';
import ControlVideoIT from './../assets/videos/it-control.mp4';
import ControlVideoES from './../assets/videos/es-control.mp4';
import ControlVideoDE from './../assets/videos/de-control.mp4';
import ControlVideoNL from './../assets/videos/nl-control.mp4';

// Localize
import LocalizeVideoFR from './../assets/videos/fr-localize.mp4';
import LocalizeVideoEN from './../assets/videos/en-localize.mp4';
import LocalizeVideoIT from './../assets/videos/it-localize.mp4';
import LocalizeVideoES from './../assets/videos/es-localize.mp4';
import LocalizeVideoDE from './../assets/videos/de-localize.mp4';
import LocalizeVideoNL from './../assets/videos/nl-localize.mp4';

// Charging
import ChargingVideoFR from './../assets/videos/fr-charging.mp4';
import ChargingVideoEN from './../assets/videos/en-charging.mp4';
import ChargingVideoIT from './../assets/videos/it-charging.mp4';
import ChargingVideoES from './../assets/videos/es-charging.mp4';
import ChargingVideoDE from './../assets/videos/de-charging.mp4';
import ChargingVideoNL from './../assets/videos/nl-charging.mp4';

// Home Promo
import HomePromoFR from './../assets/videos/fr-home-promo-16-9.mp4';
import HomePromoEN from './../assets/videos/en-home-promo-16-9.mp4';

// All Languages
import HomeVideo from './../assets/videos/all-home.mp4';
import ChargingLastVideo from './../assets/videos/all-charging-last.mp4';
import ControlLastVideo from './../assets/videos/all-control-last.mp4';
import LocalizeLastVideo from './../assets/videos/all-localize-last.mp4';
import ShareLastVideo from './../assets/videos/all-share-last.mp4';

import { SupportedLanguage } from '@components';

type RedirectionOption = 'hub' | 'firstScreen' | 'lastScreen';
type VideoOption =
  | 'home'
  | 'chargingLast'
  | 'controlLast'
  | 'localizeLast'
  | 'shareLast';

type MultiLanguageVideoOption = 'charging' | 'control' | 'localize' | 'share' | 'homePromo';

export type Video = {
  [key in VideoOption]: {
    path: string;
    fallback?: string;
  };
};

export type MultiLanguageVideo = {
  [key in SupportedLanguage]: {
    path: string;
    fallback?: string;
  };
};

type Config = {
  redirectionTimer: {
    [key in RedirectionOption]: number;
  };
  i18nVideos: {
    [key in MultiLanguageVideoOption]: MultiLanguageVideo;
  };
  videos: Video;
};

export const config: Config = {
  // define in ms
  redirectionTimer: {
    hub: 30000,
    firstScreen: 15000,
    lastScreen: 10000,
  },
  i18nVideos: {
    charging: {
      fr: { path: ChargingVideoFR },
      en: { path: ChargingVideoEN },
      it: { path: ChargingVideoIT },
      de: { path: ChargingVideoDE },
      es: { path: ChargingVideoES },
      be: { path: ChargingVideoNL },
    },
    control: {
      fr: { path: ControlVideoFR },
      en: { path: ControlVideoEN },
      it: { path: ControlVideoIT },
      de: { path: ControlVideoDE },
      es: { path: ControlVideoES },
      be: { path: ControlVideoNL },
    },
    localize: {
      fr: { path: LocalizeVideoFR },
      en: { path: LocalizeVideoEN },
      it: { path: LocalizeVideoIT },
      de: { path: LocalizeVideoDE },
      es: { path: LocalizeVideoES },
      be: { path: LocalizeVideoNL },
    },
    share: {
      fr: { path: ShareVideoFR },
      en: { path: ShareVideoEN },
      it: { path: ShareVideoIT },
      de: { path: ShareVideoDE },
      es: { path: ShareVideoES },
      be: { path: ShareVideoNL },
    },
    homePromo: {
      fr: { path: HomePromoFR },
      en: { path: HomePromoEN },
      it: { path: HomePromoEN },
      de: { path: HomePromoEN },
      es: { path: HomePromoEN },
      be: { path: HomePromoEN },
    }
  },
  videos: {
    home: { path: HomeVideo },
    chargingLast: { path: ChargingLastVideo },
    controlLast: { path: ControlLastVideo },
    localizeLast: { path: LocalizeLastVideo },
    shareLast: { path: ShareLastVideo },
  },
};
