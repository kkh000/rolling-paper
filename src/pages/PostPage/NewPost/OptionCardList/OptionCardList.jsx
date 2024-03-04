import { cn } from '../../../../utils/classNames';
import OptionCard from '../OptionCard/OptionCard';
import css from './OptionCardList.module.scss';

const OptionCardList = ({ cardList, selectedButton, selectedOption, onClick }) => {
  const topCards = cardList.slice(0, 4);
  console.log(topCards);
  return (
    <ul className={css.layout}>
      {topCards.map((card, index) => (
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
