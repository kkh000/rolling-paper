import Dropdown from '../../../components/Dropdown/Dropdown';
import css from './Message.module.scss';

const FontPicker = () => {
  const font = ['Noto Sans'];
  return (
    <section className={css.box}>
      <h1 className={css.title}>폰트 선택</h1>
      <Dropdown optionList={font} initialOption='Noto Sans' />
    </section>
  );
};

export default FontPicker;
