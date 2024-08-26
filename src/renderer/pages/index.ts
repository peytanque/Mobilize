import { Home } from './Home';
import { Hub } from './Hub';
import { Charging, ChargingLast, ChargingVideo } from './Charging';
import { Control, ControlLast, ControlVideo } from './Control';
import { Localize, LocalizeLast, LocalizeVideo } from './Localize';
import { Share, ShareLast, ShareVideo } from './Share';

export {
  Home,
  Hub,
  Charging,
  ChargingLast,
  ChargingVideo,
  Control,
  ControlLast,
  ControlVideo,
  Localize,
  LocalizeLast,
  LocalizeVideo,
  Share,
  ShareLast,
  ShareVideo,
};

export const tileFirstClassname = {
  box: 'flex flex-col h-full w-width pt-[320px] pb-[96px] bg-black',
  back: 'absolute top-[57px] left-[75px] [&_svg]:fill-white',
  text: 'flex relative flex-col uppercase [&_p]:font-bold [&_p]:text-white [&_p]:font-bold [&_p]:ml-[72px] [&_p]:text-[148px] [&_p]:leading-[114px] [&_span]:text-vermilion [&_svg]:ml-[72px] [&_svg]:mb-[110px] [&_svg]:fill-white  overflow-hidden h-full',
};

export const overlapping = {
  oneLine: 'absolute min-h-[481px] min-w-[2000px] bottom-[40px] animate-overlapping translate-x-[1200px] z-20',
  twoLines: 'absolute min-h-[481px] min-w-[2000px] bottom-[158px] animate-overlapping translate-x-[1200px] z-20',
};

export const tileVideoClassname = {};

export const tileLastClassname = {
  box: 'flex flex-col h-full w-width pt-[155px] pl-[72px] pb-[96px] bg-white',
  text: 'flex flex-col uppercase [&_p]:font-bold [&_p]:text-black [&_p]:font-bold [&_p]:text-[144px] [&_p]:leading-[113px] [&_span]:text-vermilion [&_svg]:mb-[110px] [&_svg]:fill-white z-10',
  player: 'mt-[35px] absolute w-full h-full left-0 top-0 z-1',
  button: 'mt-auto pr-[72px] flex relative z-10',
};

export const ctaClassname = 'mt-auto px-[72px]';
