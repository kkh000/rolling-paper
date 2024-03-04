import { Children, useState } from 'react';
import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from '../../constant/constant';
import css from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleLeftButton = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleRightButton = () => {
    if (slideIndex + 4 < children.length) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className={css.carousel}>
      <div className={css.slides} style={{ transform: `translateX(${-25 * slideIndex}%)` }}>
        {Children.map(children, child => (
          <div className={css.item}>{child}</div>
        ))}
      </div>
      <button className={css.leftButton} onClick={handleLeftButton}>
        <img src={ARROW_LEFT_ICON} alt='arrow-left' />
      </button>
      <button className={css.rightButton} onClick={handleRightButton}>
        <img src={ARROW_RIGHT_ICON} alt='arrow-right' />
      </button>
    </div>
  );
};

export default Carousel;
