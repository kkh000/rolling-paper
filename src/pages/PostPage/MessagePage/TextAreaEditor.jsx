import css from './TextAreaEditor.module.scss';

const TextAreaEditor = () => {
  return (
    <section className={css.box}>
      <h1 className={css.title}>내용을 입력해 주세요</h1>
      <div className={css.textArea}></div>
    </section>
  );
};

export default TextAreaEditor;
