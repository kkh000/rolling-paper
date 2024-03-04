import { cn } from '../../../../utils/classNames';
import css from './OptionCard.module.scss';

const OptionCard = ({ selectedButton, isSelected, card }) => {
  return (
    <div className={css.layout}>
      {selectedButton === 'color' ? (
        <div className={cn(css.layout, css[card], isSelected && css.selected)}></div>
      ) : (
        <div className={cn(isSelected && css.selected)}>
          <img className={css.layout} src={card} />
        </div>
      )}
    </div>
  );
};

export default OptionCard;
