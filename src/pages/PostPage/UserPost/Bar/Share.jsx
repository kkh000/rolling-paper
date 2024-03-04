import { useRef, useState } from 'react';
import { SHARE_ICON } from '../../../../constant/constant';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import css from './Share.module.scss';

const Share = ({ shareList = [], onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = async callback => {
    setIsOpen(false);
    const result = await callback();
    if (result) onClick();
  };

  const shareRef = useRef(null);

  useOutsideClick(shareRef, () => setIsOpen(false));

  return (
    <section className={css.layout} ref={shareRef}>
      <button className={css.button} onClick={toggleDropdown}>
        <img className={css.img} src={SHARE_ICON} alt='share' />
      </button>
      {isOpen && (
        <ul className={css.shareList}>
          {shareList.map(share => (
            <li
              className={css.share}
              key={share.name}
              onClick={() => {
                handleButtonClick(share.handler);
              }}
            >
              {share.name} 공유
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Share;
