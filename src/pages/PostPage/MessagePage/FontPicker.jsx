import Dropdown from '../../../components/Dropdown/Dropdown';
import { FONT_LIST } from '../../../constant/constant';
import css from './Message.module.scss';

const FontPicker = () => {
  return (
    <section className={css.box}>
      <h1 className={css.title}>폰트 선택</h1>
      <Dropdown optionList={FONT_LIST} initialOption={FONT_LIST[0]} />
    </section>
  );
};

export default FontPicker;
