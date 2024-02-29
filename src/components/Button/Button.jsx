import css from './Button.module.scss';
const Button = ({ children, type, width, isDisabled = false, onClick }) => {
  let buttonClassName = `${css.primary}`;
  if (type === 'primary-s') buttonClassName += ` ${css.small}`;
  if (type === 'secondary') buttonClassName = `${css.secondary} ${css.small}`;

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