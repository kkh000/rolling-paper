import { cn } from '../../utils/classNames';
import css from './Button.module.scss';
const Button = ({ children, fill = true, size, width, isDisabled = false, onClick }) => {
  const buttonClassName = cn(fill ? css.primary : css.secondary, size === 's' && css.small);

  return (
    <>
      <button
        className={buttonClassName}
        disabled={isDisabled}
        onClick={onClick}
        style={{
          width: `${width}`,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
