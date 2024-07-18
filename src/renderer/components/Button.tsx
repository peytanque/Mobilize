import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@routes';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  to?: (typeof routes)[keyof typeof routes];
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  to,
}) => {
  const buttonClassName = `
    py-[6.25rem] px-[6rem]
    flex items-center justify-center
    uppercase text-[4.5rem] leading-[1.6rem] font-bold text-white
    bg-vermilion  w-full rounded-[0.1rem]
    ${className ? className : ''}
  `;

  return to ? (
    <Link to={to} className={buttonClassName}>
      {children}
    </Link>
  ) : (
    <div className={buttonClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
