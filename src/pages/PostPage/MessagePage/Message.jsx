import Button from '../../../components/Button/Button';
import FontPicker from './FontPicker';
import InputName from './InputName';
import css from './Message.module.scss';
import ProfileImagePicker from './ProfileImagePicker';
import RelationshipPicker from './RelationshipPicker';
import TextAreaEditor from './TextAreaEditor';

const Message = () => {
  return (
    <form className={css.layout}>
      <InputName />
      <ProfileImagePicker />
      <RelationshipPicker />
      <TextAreaEditor />
      <FontPicker />
      <Button width={'100%'}>생성하기</Button>
    </form>
  );
};

export default Message;
