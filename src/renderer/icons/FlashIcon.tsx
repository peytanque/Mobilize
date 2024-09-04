import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 257;
const dHeight = 291;

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
      viewBox="0 0 257 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M174.11 71.8911L201.558 0.193359H48.9557L0.507812 180.039H60.5479L33.1705 290.806H100.258L256.524 71.8911H174.11ZM67.0311 286.029L105.613 150.03H41.204L74.1838 30.6631H155.717L132.85 102.361H191.868L66.9959 286.029H67.0311Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};
