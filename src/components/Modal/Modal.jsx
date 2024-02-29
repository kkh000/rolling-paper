import { useEffect } from 'react';
import reactDom from 'react-dom';
import Badge from '../../../../copy/src/components/Badge/Badge';
import { allowScroll, preventScroll } from '../../utils/scrolls';
import css from './Modal.module.scss';

const Modal = ({ profileImage, creatorName, relationship, createdAt, onClose, message }) => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
  return reactDom.createPortal(
    <section className={css.background} onClick={onClose}>
      <div
        className={css.layout}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={css.informationBox}>
          <div className={css.profileBox}>
            <img className={css.profileImage} src={profileImage} />
            <h1 className={css.profileTitle}>
              From. <span className={css.profileName}>{creatorName}</span>
            </h1>
            <Badge className={css.profileBadge} relationship={relationship} />
          </div>
          <div className={css.cardCreatedAt}>{createdAt}</div>
        </div>
        <div className={css.line}></div>
        <p className={css.textBox}>{message}</p>
        <button className={css.button} onClick={onClose}>
          확인
        </button>
      </div>
    </section>,
    document.getElementById('modal'),
  );
};

export default Modal;
