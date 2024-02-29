import { DELETE_ICON_PATH, DELETE_WHITE_ICON_PATH } from '../../constant/constant';
import css from './DeletedButton.module.scss';

const DeletedButton = ({ isDisabled = false, onClick }) => {
  return (
    <section>
      <button className={css.deleted} disabled={isDisabled} onClick={onClick}>
        <img src={isDisabled ? DELETE_WHITE_ICON_PATH : DELETE_ICON_PATH} />
      </button>
    </section>
  );
};

export default DeletedButton;
