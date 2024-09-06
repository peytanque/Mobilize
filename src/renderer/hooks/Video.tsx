import { useState } from 'react';

import { OnProgressProps } from 'react-player/base';

export const useVideo = () => {
  const [videoState, setVideoState] = useState({
    played: 0,
    seeking: false,
  });
  const { seeking } = videoState;

  const onProgress = (state: OnProgressProps) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  return {
    onProgress,
  };
};

export default useVideo;
