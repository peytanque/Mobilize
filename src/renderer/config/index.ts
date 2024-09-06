import ChargingVideoFr from './../assets/videos/fr-charging.mp4';
import ChargingVideoEn from './../assets/videos/en-charging.mp4';
import ChargingVideoIt from './../assets/videos/fr-charging.mp4';
import ControlVideoFr from './../assets/videos/fr-control.mp4';
import ControlVideoEn from './../assets/videos/en-control.mp4';
import ControlVideoIt from './../assets/videos/fr-control.mp4';
import LocalizeVideoFr from './../assets/videos/fr-localize.mp4';
import LocalizeVideoEn from './../assets/videos/en-localize.mp4';
import LocalizeVideoIt from './../assets/videos/fr-localize.mp4';
import ShareVideoFr from './../assets/videos/fr-share.mp4';
import ShareVideoEn from './../assets/videos/en-share.mp4';
import ShareVideoIt from './../assets/videos/fr-share.mp4';

import HomeVideo from './../assets/videos/all-home.mp4';
import ChargingLastVideo from './../assets/videos/all-charging-last.mp4';
import ControlLastVideo from './../assets/videos/all-control-last.mp4';
import LocalizeLastVideo from './../assets/videos/all-localize-last.mp4';
import ShareLastVideo from './../assets/videos/all-share-last.mp4';

type RedirectionOption = 'hub' | 'firstScreen' | 'lastScreen';
type VideoOption =
  | 'home'
  | 'chargingLast'
  | 'controlLast'
  | 'localizeLast'
  | 'shareLast';

export type SupportedLanguage = 'fr' | 'en' | 'it';
type MultiLanguageVideoOption = 'charging' | 'control' | 'localize' | 'share';

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
    firstScreen: 10000,
    lastScreen: 10000,
  },
  i18nVideos: {
    charging: {
      fr: { path: ChargingVideoFr },
      en: { path: ChargingVideoEn },
      it: { path: ChargingVideoIt },
    },
    control: {
      fr: { path: ControlVideoFr },
      en: { path: ControlVideoEn },
      it: { path: ControlVideoIt },
    },
    localize: {
      fr: { path: LocalizeVideoFr },
      en: { path: LocalizeVideoEn },
      it: { path: LocalizeVideoIt },
    },
    share: {
      fr: { path: ShareVideoFr },
      en: { path: ShareVideoEn },
      it: { path: ShareVideoIt },
    },
  },
  videos: {
    home: { path: HomeVideo },
    chargingLast: { path: ChargingLastVideo },
    controlLast: { path: ControlLastVideo },
    localizeLast: { path: LocalizeLastVideo },
    shareLast: { path: ShareLastVideo },
  },
};
