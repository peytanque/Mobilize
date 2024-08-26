import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 130;
const dHeight = 170;

export const LockIcon: FC<SvgProps> = ({
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
      viewBox="0 0 130 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.9293 56.1836H129.524V151.783L111.252 170H18.272L0 151.783V56.1836H27.5119V12.8349L40.3854 0H89.1385L102.012 12.8349V34.2194H83.5946V17.8239H45.9293V56.1836ZM18.4174 152.155H111.106V74.0075H18.4174V152.155ZM55.5495 121.249H73.9669V139.073H55.5495V121.249Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};
