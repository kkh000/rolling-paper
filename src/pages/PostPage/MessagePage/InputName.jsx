import { useState } from 'react';
import Input from '../../../components/Input/Input';
import css from './InputName.module.scss';

const InputName = ({ onChange }) => {
  const [error, setError] = useState(false);

  const handleBlur = e => {
    const value = e.target.value;
    setError(value.trim() === '');
    onChange(value);
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>From.</h1>
      <Input
        placeholder='이름을 입력해 주세요.'
        isDisabled={false}
        isError={error}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputName;
