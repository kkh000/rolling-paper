import css from './InputName.module.scss';

const InputName = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>From.</h1>
      <input className={css.input} placeholder='이름을 입력해 주세요.' />
    </div>
  );
};

export default InputName;
