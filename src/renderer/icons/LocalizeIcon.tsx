import { FC } from 'react';

const dFill = '#3F3F3F';
const dWidth = 238;
const dHeight = 294;

export const LocalizeIcon: FC<SvgProps> = ({
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
      viewBox="0 0 238 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.145103 115.015C0.145103 43.0082 44.5159 0 118.863 0C193.21 0 237.581 43.0082 237.616 115.015C237.616 174.723 219.763 216.578 155.687 294H80.5365C17.9633 216.578 0.145103 174.688 0.145103 115.015ZM33.6503 115.015C33.6503 166.617 60.0282 224.439 118.129 291.624H118.164C177.733 224.404 204.146 169.378 204.146 115.015C204.146 60.6517 173.855 30.7102 118.898 30.7102C63.9412 30.7102 33.6503 60.6517 33.6503 115.015ZM73.6187 116.307C73.6187 88.4622 90.9128 71.168 118.758 71.168C146.534 71.168 163.758 88.6368 163.758 116.307C163.758 143.978 146.603 161.167 118.758 161.167C90.9128 161.167 73.6187 144.153 73.6187 116.307Z"
        fill={isActive && activeFill ? activeFill : fill ?? dFill}
      />
    </svg>
  );
};
