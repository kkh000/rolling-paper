import { cn } from '../../utils/classNames';
import css from './Input.module.scss';

const Input = ({ value, onChange, placeholder, isDisabled, isError }) => {
  return (
    <>
      <input
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
        className={cn(css.input, isError && css.error)}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      {isError && <p className={css.errorText}>값을 입력해 주세요.</p>}
    </>
  );
};

export default Input;
