import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;

  // Animated btn only
  timeout?: number;
  isAnimatingReset?: boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  timeout,
  isAnimatingReset,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(!isAnimatingReset);
  }, [isAnimatingReset]);

  const buttonClassName = `
    py-[6.25rem] px-[6rem]
    flex items-center justify-center
    uppercase text-[4.5rem] leading-[1.6rem] font-bold text-white
    bg-vermilion  w-full rounded-[0.1rem] relative overflow-hidden z-10
    ${className ? className : ''}
  `;

  const progressbtnTailwindClassName = 'animate-progressbtn';

  const buttonProgressClassName = `absolute left-0 top-0 right-0 bottom-0 z-10 bg-[#D33900] opacity-1 ${isAnimating ? progressbtnTailwindClassName : ''}`;

  const buttonProgressStyle: CSSProperties = {
    animationDuration: `${timeout}ms`,
  };

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
    >
      <div className="z-20">{children}</div>
      {isAnimating && (
        <div className={buttonProgressClassName} style={buttonProgressStyle} />
      )}
    </button>
  );
};

export default Button;
