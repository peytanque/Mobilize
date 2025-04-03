import { FC, useEffect, useRef, useState } from 'react';

import { CustomSlider, language, SupportedLanguage } from '@components';
import { MultiLanguageVideo } from '@config';

import { useTranslation } from 'react-i18next';
import { OnProgressProps } from 'react-player/base';
import ReactPlayer from 'react-player';

type CustomPlayerProps = {
  urls: MultiLanguageVideo;
  redirectTo: () => void;
  fullscreen?: boolean;
  width?: number;
  height?: number;
  withCustomSlider?: boolean;
  redirection?: boolean;
};

export const CustomPlayer: FC<CustomPlayerProps> = ({
  redirectTo,
  urls,
  fullscreen = true,
  width = 1080,
  height = 1920,
  withCustomSlider = true,
  redirection = true
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
    // be !== nl
    // setUrl(urls[i18n.languages[1] as SupportedLanguage].path);

    switch (i18n.language) {
      case language.fr:
        setUrl(urls.fr.path);
        break;
      case language.en:
        setUrl(urls.en.path);
        break;
      case language.it:
        setUrl(urls.it.path);
        break;
      case language.de:
        setUrl(urls.de.path);
        break;
      case language.es:
        setUrl(urls.es.path);
        break;
      case language.nl:
        setUrl(urls.be.path);
        break;
    }
    if (videoState.played === 1 && redirection) {
      redirectTo();
    }
  }, [i18n.language, videoState.played]);

  const onProgress = (state: OnProgressProps) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const calcNearestSeekTo = (value: number) => {
    return Math.round(duration * ((value as number) / 100));
  };

  const onChange = (event: Event, value: number | number[]) => {
    ref.current?.seekTo(calcNearestSeekTo(value as number));
  };

  return (
    <div className={fullscreen ? 'w-full h-full relative bg-black' : ''}>
      <ReactPlayer
        ref={ref}
        playing={playing}
        muted={muted}
        width={width}
        height={height}
        url={url}
        progressInterval={100}
        loop={!withCustomSlider}
        onDuration={(duration) => setDuration(duration)}
        onProgress={(currentProgress) => onProgress(currentProgress)}
        // controls
      />
      {withCustomSlider && (
        <CustomSlider
          value={videoState.played}
          onChange={(e, v) => onChange(e, v)}
        />
      )}
    </div>
  );
};
