import { FC } from 'react';

const dFill = 'black'
const dWidth = 31
const dHeight= 32

export const SlashSVG: FC<SvgProps> = ({
  activeFill,
  isActive,
  fill,
  height,
  width,
}) => {
  return (
    <svg
      width={width ?? dWidth}
      height={height ?? dHeight}
      viewBox="0 0 31 32"
      fill={isActive
        ? activeFill 
        : fill ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.9032 0H31L10.0968 32H0L20.9032 0Z" fill={fill ?? dFill} />
    </svg>
  );
};
