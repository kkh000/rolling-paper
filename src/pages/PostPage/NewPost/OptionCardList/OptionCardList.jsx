import { BACKGROUND_IMAGE_URL_LIST, CARD_COLOR_LIST } from '../../../../constant/constant';
import { cn } from '../../../../utils/classNames';
import OptionCard from '../OptionCard/OptionCard';
import css from './OptionCardList.module.scss';

const OptionCardList = ({ selectedButton, selectedOption, onClick }) => {
  const cardList = selectedButton === 'color' ? CARD_COLOR_LIST : BACKGROUND_IMAGE_URL_LIST;
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
