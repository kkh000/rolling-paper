import { useEffect } from 'react';
import reactDom from 'react-dom';
import { allowScroll, preventScroll } from '../../utils/scrolls';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
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
            <img className={css.profileImage} src={profileImage} alt='profile' />
            <h1 className={css.profileTitle}>
              From. <span className={css.profileName}>{creatorName}</span>
            </h1>
            <Badge className={css.profileBadge} relationship={relationship} />
          </div>
          <div className={css.cardCreatedAt}>{createdAt}</div>
        </div>
        <div className={css.line}></div>
        <p className={css.textBox}>{message}</p>
        <Button size='s' onClick={onClose}>
          확인
        </Button>
      </div>
    </section>,
    document.getElementById('modal'),
  );
};

export default Modal;
