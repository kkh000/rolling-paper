// import { useState } from 'react';
import css from './OutlinedButton.module.scss';

const OutlinedButton = () => {
  // hasIcon OutlineSize = prop
  // add-lg-white, deleted-white : disabled, 나머지 add-lg, deleted

  return (
    <div>
      <button className={css.button}>
        <span className={css.buttonTitle}>버튼버튼</span>
      </button>
    </div>
  );
};

export default OutlinedButton;
