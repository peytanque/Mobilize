import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 8;
const dHeight = 32;

export const VerticalSeparatorIcon: FC<SvgProps> = ({
  activeFill,
  isActive,
  fill,
  height,
  width,
  className,
}) => {
  return (
    <svg
      width={width ?? dWidth}
      height={height ?? dHeight}
      viewBox="0 0 8 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ''}
    >
      <rect width="8" height="32" fill={isActive && activeFill ? activeFill : (fill ?? dFill)}/>
    </svg>
  );
};
