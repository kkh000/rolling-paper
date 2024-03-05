import { useState } from 'react';
import { ARROW_DOWN_ICON, ARROW_UP_ICON } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import css from './Dropdown.module.scss';

const Dropdown = ({ optionList = [], initialOption = null, isDisabled, isError, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handleButtonClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <section className={css.layout}>
      <button
        className={cn(css.button, isError && css.error)}
        disabled={isDisabled}
        onClick={handleButtonClick}
      >
        {selectedOption || 'Select Option'}
        <img
          src={isOpen ? ARROW_UP_ICON : ARROW_DOWN_ICON}
          alt={isOpen ? 'arrow_up' : 'arrow_down'}
        />
      </button>
      {isOpen && (
        <ul className={css.optionsBox}>
          {optionList.map((option, index) => (
            <li className={css.option} key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Dropdown;
