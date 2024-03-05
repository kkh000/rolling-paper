import { useState } from 'react';
import Input from '../../../../components/Input/Input';
import css from './InputName.module.scss';

const InputName = ({ onChange }) => {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = value => {
    setInputValue(value);
    onChange(value);
  };

  const handleBlur = () => {
    setError(inputValue.trim() === '');
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>From.</h1>
      <Input
        value={inputValue}
        placeholder='이름을 입력해 주세요.'
        isError={error}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputName;
