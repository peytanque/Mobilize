import { Button } from '@components';
import { routes } from '@routes';
import { FC } from 'react';

export const ChargingVideo: FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-between text-9xl py-[9.6rem] px-[7.2rem]'>
      <div className='absolute top-0 w-full bg-alto h-[1.8rem]'></div>
      <p>ChargingVideo</p>
      <Button to={routes.chargingLast}>next</Button>
    </div>
  )
};

export default ChargingVideo;
