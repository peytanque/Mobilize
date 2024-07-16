import { FC } from 'react';

const dFill = '#E3E3E3';
const dWidth = 260;
const dHeight = 294;

const dClipPathFill = 'white';

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
    viewBox="0 0 260 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_800_11490)">
        <path
          d="M241.733 97.1816H96.9527V30.838H162.203V59.1939H194.096V22.2045L171.795 0H87.3603L65.0592 22.2045V97.1816H17.4222V262.514L49.0719 294.027H210.111L241.761 262.514V97.1816H241.733ZM209.84 263.189H49.3157V128.02H209.813V263.189H209.84Z"
          fill={isActive && activeFill ? activeFill : fill ?? dFill}
          />
        <path
          d="M145.511 150.656H113.618V240.148H145.511V150.656Z"
          fill={isActive && activeFill ? activeFill : fill ?? dFill}
          />
      </g>
      <defs>
        <clipPath id="clip0_800_11490">
          <rect
            width="224.311"
            height="294"
            fill={dClipPathFill}
            transform="translate(17.4222)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
