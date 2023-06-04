import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  actionOnClick: () => void;
  className: string;
}

const Button = ({
  actionOnClick,
  children,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick}>
      {children}
    </button>
  );
};

export default Button;
