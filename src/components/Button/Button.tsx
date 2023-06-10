interface ButtonProps {
  actionOnClick?: () => void;
  className?: string;
  text?: string;
  url?: string;
  altText?: string;
  width?: string;
  height?: string;
}

const Button = ({
  actionOnClick,
  text,
  url,
  altText,
  width,
  height,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text ||
        ((url || altText) && (
          <img src={url} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;
