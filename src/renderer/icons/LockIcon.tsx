import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 222;
const dHeight = 292;

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
      viewBox="0 0 222 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.7735 96.6246H221.935V260.431L190.627 291.646H31.3086L0 260.431V96.6246H46.2158V22.3477L68.2742 0.355469H153.661L175.72 22.3477V58.9895H144.162V30.8963H77.7735V96.6246ZM31.5577 261.07H190.378V127.165H31.5577V261.07ZM95.2148 149.627H126.773V238.66H95.2148V149.627Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};
