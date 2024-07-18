import { Button } from '@components';
import { routes } from '@routes';
import { FC } from 'react';

export const ShareVideo: FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-between text-9xl py-[9.6rem] px-[7.2rem]'>
      <p>ShareVideo</p>
      <Button to={routes.shareLast}>next</Button>
    </div>
  )
};

export default ShareVideo;
