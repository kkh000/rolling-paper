import { useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import css from './TextAreaEditor.module.scss';
import './quill.scss';

const TextAreaEditor = ({ onChange }) => {
  const [text, setText] = useState('');
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    }),
    [],
  );
  const formats = ['bold', 'italic', 'underline', 'strike', 'size', 'align', 'color', 'background'];

  const handleTextChange = content => {
    setText(content);
    onChange(content);
  };

  return (
    <section className={css.box}>
      <h1 className={css.title}>내용을 입력해 주세요</h1>
      <ReactQuill
        theme='snow'
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleTextChange}
      />
    </section>
  );
};

export default TextAreaEditor;
