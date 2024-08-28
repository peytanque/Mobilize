import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 64;
const dHeight = 65;

export const HomeIcon: FC<SvgProps> = ({
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
        d="M41.812 0H22.0399L0 22.3796V65H64V22.3796L41.812 0ZM57.0794 58.2295H35.4525V42.9113H28.5397V58.2295H6.91281V25.4857L31.9221 0.149407L57.0794 25.4936V58.2374V58.2295Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
        stroke={isActive && activeFill ? activeFill : (fill ?? dFill)}
        strokeWidth="2"
      />
    </svg>
  );
};

export default HomeIcon;
