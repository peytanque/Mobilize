import { FC } from 'react';

const dFill = 'black';
const dWidth = 100;
const dHeight = 100;

export const BackIcon: FC<SvgProps> = ({
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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.2521 77.9395C54.3521 68.8374 44.0521 61.4374 31.25 51.1374V47.6353C44.0521 37.3353 54.3521 29.9353 68.2521 20.8333L70.6521 24.3353C57.8521 32.4333 47.9521 39.5353 35.95 49.4353C47.9521 59.2353 57.8521 66.3374 70.6521 74.4374L68.2521 77.9395Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
        strokeWidth="2"
      />
    </svg>
  );
};

export default BackIcon;
