import { Button } from '@components';
import { routes } from '@routes';
import { FC } from 'react';

export const ControlVideo: FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-between text-9xl py-[9.6rem] px-[7.2rem]'>
      <p>ControlVideo</p>
      <Button to={routes.controlLast}>next</Button>
    </div>
  )
};

export default ControlVideo;
