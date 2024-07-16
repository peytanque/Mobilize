import { FC } from 'react';

const dFill = '#3F3F3F';
const dWidth = 260;
const dHeight = 294;

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
      viewBox="0 0 260 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M175.717 72.5433L203.519 0H49.0578L6.10352e-05 181.934H60.7655L33.0651 294H100.983L259.156 72.5433H175.717ZM67.311 289.157L106.348 151.555H41.1964L74.5988 30.819H157.16L133.981 103.362H193.734L67.311 289.157Z"
        fill={isActive && activeFill ? activeFill : fill ?? dFill}
      />
    </svg>
  );
};
