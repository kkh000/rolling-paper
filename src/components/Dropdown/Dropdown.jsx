import { useState } from 'react';
import { cn } from '../../utils/classNames';
import css from './Dropdown.module.scss';

const Dropdown = ({ options = [], isDisabled, isError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section className={css.layout}>
      <button
        className={cn(css.button, isError && css.error)}
        disabled={isDisabled}
        onClick={toggleDropdown}
      >
        {selectedOption || 'Select Option'}
      </button>

      {isOpen && (
        <ul className={css.optionsBox}>
          {options.map((option, index) => (
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
