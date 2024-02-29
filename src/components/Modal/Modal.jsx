import reactDom from 'react-dom';
import Badge from '../Badge/Badge';
import css from './Modal.module.scss';

const Modal = ({ profileImage, creatorName, relationship, createdAt, onClose, message }) => {
  return reactDom.createPortal(
    <div className={css.background} onClick={onClose}>
      <div
        className={css.layout}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={css.informationBox}>
          <div className={css.profileBox}>
            <img className={css.profileImage} src={profileImage} />
            <div className={css.profileTitle}>
              From. <span className={css.profileName}>{creatorName}</span>
            </div>
            <Badge className={css.profileBadge} relationship={relationship} />
          </div>
          <div className={css.cardCreatedAt}>{createdAt}</div>
        </div>
        <div className={css.line}></div>
        <div className={css.textBox}>{message}</div>
        <button className={css.button} onClick={onClose}>
          확인
        </button>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;