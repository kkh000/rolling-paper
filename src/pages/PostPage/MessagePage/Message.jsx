import Button from '../../../components/Button/Button';
import InputName from './InputName';
import css from './Message.module.scss';
import SelectFont from './SelectFont';
import SelectProfileImage from './SelectPorfileImage';
import SelectRelationship from './SelectRelationship';
import TextAreaEditor from './TextAreaEditor';

const Message = () => {
  return (
    <section className={css.layout}>
      <InputName />
      <SelectProfileImage />
      <SelectRelationship />
      <TextAreaEditor />
      <SelectFont />
      <Button width={'100%'}>생성하기</Button>
    </section>
  );
};

export default Message;
