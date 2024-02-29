import { CHECK_ICON, CLOSE_ICON } from '../../constant/constant';
import css from './Toast.module.scss';

const Toast = ({ children }) => {
  return (
    <section className={css.layout}>
      <div className={css.titleBox}>
        <img src={CHECK_ICON} alt='check' />
        <p className={css.text}>{children}</p>
      </div>
      <img src={CLOSE_ICON} alt='close' />
    </section>
  );
};

export default Toast;
