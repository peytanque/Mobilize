import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 150;
const dHeight = 170;

export const FlashIcon: FC<SvgProps> = ({
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
      viewBox="0 0 150 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M101.605 41.9468L117.681 0H28.3667L0 105.2H35.1365L19.1192 170H58.3917L149.852 41.9468H101.605ZM38.9213 167.2L61.4937 87.6339H23.821L43.1353 17.8205H90.8749L77.4719 59.7673H112.023L38.9213 167.2Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};
