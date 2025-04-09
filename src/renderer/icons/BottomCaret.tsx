import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 40;
const dHeight = 26;

export const BottomCaret: FC<SvgProps> = ({
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
      viewBox="0 0 40 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.2321 0.615234H39.999L23.9193 25.2311H16.1523L32.2321 0.615234Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.76792 0.615234H0.00101471L16.0807 25.2311H23.8477L7.76792 0.615234Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};

export default BottomCaret;