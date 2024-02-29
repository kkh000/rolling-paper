import { cn } from '../../utils/classNames';
import css from './Input.module.scss';

const Input = ({ placeholder, isDisabled, isError }) => {
  return (
    <>
      <div
        className={cn(css.input, isError && css.error)}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      {isError && <p className={css.errorText}>Error Message</p>}
    </>
  );
};

export default Input;
