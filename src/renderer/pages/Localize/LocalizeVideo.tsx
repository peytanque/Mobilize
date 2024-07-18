import { Button } from '@components';
import { routes } from '@routes';
import { FC } from 'react';

export const LocalizeVideo: FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-between text-9xl py-[9.6rem] px-[7.2rem]'>
      <p>LocalizeVideo</p>
      <Button to={routes.localizeLast}>next</Button>
    </div>
  )
};

export default LocalizeVideo;
