import Dropdown from '../../../components/Dropdown/Dropdown';
import { RELATIONSHIP_LIST } from '../../../constant/constant';
import css from './Message.module.scss';

const RelationshipPicker = () => {
  return (
    <section className={css.box}>
      <h1 className={css.title}>상대와의 관계</h1>
      <Dropdown optionList={RELATIONSHIP_LIST} initialOption={RELATIONSHIP_LIST[0]} />
    </section>
  );
};

export default RelationshipPicker;
