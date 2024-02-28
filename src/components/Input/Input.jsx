import { cn } from '../../utils/classNames';
import css from './Input.module.scss';

const Input = ({ placeholder, isDisabled, isError }) => {
  return (
    <div className={css.layout}>
      <input
        className={cn(css.input, isError && css.error)}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      {isError && <p className={css.errorText}>Error Message</p>}
    </div>
  );
};

export default Input;
