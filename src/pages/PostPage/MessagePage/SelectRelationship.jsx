import Dropdown from '../../../components/Dropdown/Dropdown';
import css from './SelectRelationship.module.scss';

const SelectRelationship = () => {
  const realtionship = ['지인', '친구', '동료', '가족'];
  return (
    <div className={css.box}>
      <h1 className={css.title}>상대와의 관계</h1>
      <Dropdown initialOption='지인' optionList={realtionship} />
    </div>
  );
};

export default SelectRelationship;
