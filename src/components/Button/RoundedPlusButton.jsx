import css from './RoundedPlusButton.module.scss';

const RoundedPlusButton = ({ isDisabled = false, onClick }) => {
  return (
    <button className={css.rounded} onClick={onClick} disabled={isDisabled}>
      <div className={css.plus}>
        <img src='/assets/plus.svg' alt='플러스' />
      </div>
    </button>
  );
};

export default RoundedPlusButton;
