import { useState } from 'react';
import css from './ToggleButton.module.scss';

const ToggleButton = () => {
  const [selectedButton, setSelectedButton] = useState('color');

  const handleButtonClick = button => {
    event.preventDefault();
    setSelectedButton(prevSelected => (prevSelected === button ? prevSelected : button));
  };

  return (
    <section className={css.layout}>
      <button
        className={selectedButton === 'color' ? css.selected : ''}
        onClick={event => handleButtonClick('color', event)}
      >
        컬러
      </button>
      <button
        className={selectedButton === 'image' ? css.selected : ''}
        onClick={event => handleButtonClick('image', event)}
      >
        이미지
      </button>
    </section>
  );
};

export default ToggleButton;
