import { Button } from '@components';
import { routes } from '@routes';
import { ChangeEventHandler, FC, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import TestVideo from './../../assets/videos/test.mp4';
import { OnProgressProps } from 'react-player/base';

export const ControlVideo: FC = () => {
  const ref = useRef<ReactPlayer>(null);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true,
    played: 0,
    seeking: false,
    playedSeconds: 0,
    loadedSeconds: 0,
    loaded: 0
  });

  const { playing, muted, played, seeking } = videoState;

  const [duration, setDuration] = useState<number>(0);
  const [seek, setSeek] = useState<number>(0);
  const [progress, setProgress] = useState<OnProgressProps | null>(null);

  let val = progress?.played ? progress?.played * 100 : 0;

  const handleProgress = (state: OnProgressProps) => {
    // console.log('handleProgress', state)
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  // const handleProgress = (state: OnProgressProps) => {
  //   if (!seek) {
  //     setProgress(state);
  //   }
  // };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log('event', event)
    let value = parseFloat(event.currentTarget.value);
    // event.stopPropagation();
    // ref.current?.seekTo(value);
  };

  return (
    <div className="w-full h-full relative">
      <ReactPlayer
        ref={ref}
        playing={playing}
        muted={muted}
        width={1080}
        height={1920}
        url={TestVideo}
        // controls
        onSeek={(currentSeek) => setSeek(currentSeek)}
        onProgress={(currentProgress) => handleProgress(currentProgress)}
        onDuration={(currentDuration) => setDuration(currentDuration)}
      />
      <div className="absolute bottom-0 bg-[#4B4B4B] h-[35px] w-full">
        <input
          type="range"
          value={videoState.played * 100}
          // value={seek}
          className="w-full h-[35px] appearance-none bg-vermilion"
          onChangeCapture={(event: React.FormEvent<HTMLInputElement>) =>
            handleOnChange(event)
          }
        />
      </div>
    </div>
  );
};

export default ControlVideo;
