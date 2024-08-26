export const routes = {
  home: '/',
  hub: '/hub',

  charging: '/hub/charging',
  chargingVideo: '/hub/charging/video',
  chargingLast: '/hub/charging/last',

  control: '/hub/control',
  controlVideo: '/hub/control/video',
  controlLast: '/hub/control/last',

  localize: '/hub/localize',
  localizeVideo: '/hub/localize/video',
  localizeLast: '/hub/localize/last',

  share: '/hub/share',
  shareVideo: '/hub/share/video',
  shareLast: '/hub/share/last',
} as const;

export default routes;
