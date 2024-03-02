import Dropdown from '../../../components/Dropdown/Dropdown';
import css from './Message.module.scss';

const RelationshipPicker = () => {
  const realtionship = ['지인', '친구', '동료', '가족'];
  return (
    <section className={css.box}>
      <h1 className={css.title}>상대와의 관계</h1>
      <Dropdown initialOption='지인' optionList={realtionship} />
    </section>
  );
};

export default RelationshipPicker;
