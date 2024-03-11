import { cn } from '../../../../utils/classNames';
import OptionCard from '../OptionCard/OptionCard';
import css from './OptionCardList.module.scss';

const OptionCardList = ({ cardList = [], selectedButton, selectedOption, onClick }) => {
  return (
    <ul className={css.layout}>
      {cardList.map((card, index) => (
        <li
          className={cn(selectedOption === index && css.selected)}
          key={index}
          onClick={() => onClick(index)}
        >
          <OptionCard
            selectedButton={selectedButton}
            isSelected={index === selectedOption}
            card={card}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionCardList;
