import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 71;
const dHeight = 71;

export const ArrowRightIcon: FC<SvgProps> = ({
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
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.3013 62.125H41.2396L67.8555 35.1763L41.879 8.875H32.9408L55.7625 31.9821H2.95703V38.3848H55.7625L32.3013 62.125Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowRightIcon;
