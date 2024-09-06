import { useEffect, useState } from 'react';

import { useIdleTimer } from 'react-idle-timer';

type Action = 'Idle' | 'Active'

export const useIdle = (timeout: number) => {
  const [state, setState] = useState<Action>('Active')
  const [isAnimatingReset, setIsAnimatingReset] = useState<boolean>(false)
  const [remaining, setRemaining] = useState<number>(0)
  const [isFinish, setIsFinish] = useState<boolean>(false)

  const onIdle = () => {
    setState('Idle')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setIsAnimatingReset(true)

    setTimeout(() => {
      setIsAnimatingReset(false);
    }, 100);
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: timeout,
    throttle: 100
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 100)

    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    if (remaining === 0 && state === 'Idle') {
      setIsFinish(true)
    } else {
      setIsFinish(false)
    }
  }, [state, remaining])

  return {
    isAnimatingReset,
    isFinish,
  }
};

export default useIdle;
