import { FC } from 'react';

const dFill = 'white';
const dWidth = 63;
const dHeight = 63;

export const DiscoverIcon: FC<SvgProps> = ({
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
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5149 49.6723C29.2719 43.9379 35.7609 39.2759 43.8262 32.7869V30.5806C35.7609 24.0916 29.2719 19.4296 20.5149 13.6953L19.0029 15.9016C27.0669 21.0033 33.3039 25.4776 40.8652 31.7146C33.3039 37.8886 27.0669 42.3629 19.0029 47.4659L20.5149 49.6723Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
        strokeWidth="2"
      />
    </svg>
  );
};

export default DiscoverIcon;
