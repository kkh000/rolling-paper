import { useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import css from './TextAreaEditor.module.scss';

const TextAreaEditor = ({ onChange }) => {
  const [value, setValue] = useState('');
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    }),
    [],
  );
  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'align',
    'color',
    'background',
  ];

  const handleTextChange = (content, delta, source, editor) => {
    const textValue = editor.getText();
    console.log(textValue);
    setValue(content);
    onChange(content);
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>내용을 입력해 주세요</h1>
      <ReactQuill
        style={{ height: '16.3rem', width: '45rem ', margin: '0.8rem 0rem 3.13rem' }}
        theme='snow'
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default TextAreaEditor;
