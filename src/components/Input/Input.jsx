import { cn } from '../../utils/classNames';
import css from './Input.module.scss';

const Input = ({ value, onBlur, onChange, placeholder, isDisabled, isError }) => {
  return (
    <>
      <input
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
        onBlur={onBlur}
        className={cn(css.input, isError && css.error)}
        disabled={isDisabled}
        placeholder={placeholder}
        maxLength={10}
      />
      {isError && <p className={css.errorText}>값을 입력해 주세요.</p>}
    </>
  );
};

export default Input;
