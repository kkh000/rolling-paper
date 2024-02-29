import { useState } from 'react';
import css from './ToggleButton.module.scss';

const ToggleButton = () => {
  const [selectedButton, setSelectedButton] = useState('color');

  const handleButtonClick = button => {
    setSelectedButton(prevSelected => (prevSelected === button ? prevSelected : button));
  };

  return (
    <div className={css.layout}>
      <button
        className={selectedButton === 'color' ? css.selected : ''}
        onClick={() => handleButtonClick('color')}
      >
        색깔
      </button>
      <button
        className={selectedButton === 'image' ? css.selected : ''}
        onClick={() => handleButtonClick('image')}
      >
        이미지
      </button>
    </div>
  );
};

export default ToggleButton;
