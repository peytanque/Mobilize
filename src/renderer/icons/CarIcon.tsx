import { FC } from 'react';

const dFill = 'inherit';
const dWidth = 275;
const dHeight = 292;

export const CarIcon: FC<SvgProps> = ({
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
      viewBox="0 0 275 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M241.164 32.5986L245.916 85.1759L274.283 72.627V99.1468L180.322 136.971H94.2924L0.331381 99.1468V72.627L28.6983 85.1759L33.4857 32.5986L64.9251 0.355469H209.689L241.164 32.5986ZM97.2577 108.07L177.035 108.212L177.071 108.176L215.548 92.9967L212.512 46.214L197.292 29.0792H76.7506L62.1384 46.2851L59.1016 92.9967L97.2577 108.07ZM91.8173 162.814L182.027 162.956L181.991 162.92L253.051 134.979L274.202 156.024V291.644H177.597V268.644H96.8547V291.644H0.25V156.024L21.4002 134.979L91.8173 162.814ZM204.356 262.92H244.263V170.563L194.031 191.715H80.492L30.2604 170.563V262.92H70.167V239.92H204.356V262.92Z"
        fill={isActive && activeFill ? activeFill : (fill ?? dFill)}
      />
    </svg>
  );
};
