import { PLUS_ICON } from '../../constant/constant';
import css from './RoundedPlusButton.module.scss';

const RoundedPlusButton = ({ isDisabled = false, onClick }) => {
  return (
    <button className={css.rounded} onClick={onClick} disabled={isDisabled}>
      <div className={css.plus}>
        <img src={PLUS_ICON} alt='플러스' />
      </div>
    </button>
  );
};

export default RoundedPlusButton;
