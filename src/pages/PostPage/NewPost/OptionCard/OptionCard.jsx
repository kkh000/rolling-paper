import { cn } from '../../../../utils/classNames';
import css from './OptionCard.module.scss';

const OptionCard = ({ selectedButton, isSelected, card }) => {
  return (
    <>
      {selectedButton === 'color' ? (
        <div className={cn(css.layout, css[card], isSelected && css.selected)}></div>
      ) : (
        <div className={cn(css.layout, isSelected && css.selected)}>
          <img className={css.image} src={card} />
        </div>
      )}
    </>
  );
};

export default OptionCard;
