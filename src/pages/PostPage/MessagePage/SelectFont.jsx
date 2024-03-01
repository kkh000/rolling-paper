import Dropdown from '../../../components/Dropdown/Dropdown';
import css from './SelectFont.module.scss';

const SelectFont = () => {
  const font = ['Noto Sans'];
  return (
    <div className={css.box}>
      <h1 className={css.title}>폰트 선택</h1>
      <Dropdown options={font} initialOption='Noto Sans' />
    </div>
  );
};

export default SelectFont;
