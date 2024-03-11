import css from './ToggleButton.module.scss';

const ToggleButton = ({ selectedButton = 'color', onClick }) => {
  const handleButtonClick = (option, event) => {
    event.preventDefault();
    if (option !== selectedButton) onClick();
  };

  return (
    <section className={css.layout}>
      <button
        className={selectedButton === 'color' ? css.selected : ''}
        onClick={event => {
          handleButtonClick('color', event);
        }}
      >
        컬러
      </button>
      <button
        className={selectedButton === 'image' ? css.selected : ''}
        onClick={event => {
          handleButtonClick('image', event);
        }}
      >
        이미지
      </button>
    </section>
  );
};

export default ToggleButton;
