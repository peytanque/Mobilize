import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OnProgressProps } from 'react-player/base';
import ReactPlayer from 'react-player';
import { CustomSlider, language } from '@components';

type languageUrl = {
  fr: string;
  en: string;
  it: string;
};

type CustomPlayerProps = {
  urls: languageUrl;
  redirectTo: () => void;
};

export const CustomPlayer: FC<CustomPlayerProps> = ({
  redirectTo,
  urls,
}) => {
  const { i18n } = useTranslation();
  const ref = useRef<ReactPlayer>(null);

  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true,
    played: 0,
    seeking: false,
    playedSeconds: 0,
    loadedSeconds: 0,
    loaded: 0,
  });
  const { playing, muted, seeking } = videoState;

  useEffect(() => {
    switch (i18n.language) {
      case language.fr:
        setUrl(urls.fr);
        break;
      case language.en:
        setUrl(urls.en);
        break;
      case language.it:
        setUrl(urls.it);
        break;
    }
    if (videoState.played === 1) {
      redirectTo();
    }
  }, [i18n.language, videoState.played]);

  const onProgress = (state: OnProgressProps) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const onChange = (event: Event, value: number | number[]) => {
    let test = Math.round(duration * ((value as number) / 100));
    ref.current?.seekTo(test);
  };

  return (
    <div className="w-full h-full relative">
      <ReactPlayer
        ref={ref}
        playing={playing}
        muted={muted}
        width={1080}
        height={1920}
        url={url}
        progressInterval={100}
        onDuration={(duration) => setDuration(duration)}
        onProgress={(currentProgress) => onProgress(currentProgress)}
      />
      <CustomSlider
        value={videoState.played}
        onChange={(e, v) => onChange(e, v)}
      />
    </div>
  );
};
