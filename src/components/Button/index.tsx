import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, ...rest }) => {
  return (
    <button
      className={`w-full h-[52px] flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 normal-case lg:text-base text-sm font-medium font-poppins rounded-lg cursor-pointer disabled:cursor-normal disabled:opacity-[0.5] text-gray-50 font-secondary ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
