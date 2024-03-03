import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { RELATIONSHIP_LIST, FONT_LIST } from '../../../constant/constant';
import FontPicker from './FontPicker';
import InputName from './InputName';
import css from './Message.module.scss';
import ProfileImagePicker from './ProfileImagePicker';
import RelationshipPicker from './RelationshipPicker';
import TextAreaEditor from './TextAreaEditor';

const Message = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [relationship, setRelationship] = useState(RELATIONSHIP_LIST[0]);
  const [font, setFont] = useState(FONT_LIST[0]);

  const handleNameChange = name => {
    setName(name);
  };

  const handleTextChange = text => {
    setText(text);
  };

  const handleImageChange = image => {
    setImage(image);
  };

  const handleRelationshipChange = relationship => {
    setRelationship(relationship);
  };

  const handleFontChange = font => {
    setFont(font);
  };

  const isActive = name.trim() !== '' && text.trim() !== '';

  /*state 값사용하는곳이 없는경우가 있어서 임시로 지정*/
  console.log('Name:', name);
  console.log('Text:', text);
  console.log('Image:', image);
  console.log('Relationship:', relationship);
  console.log('Font:', font);

  return (
    <section className={css.layout}>
      <InputName onChange={handleNameChange} />
      <ProfileImagePicker onChange={handleImageChange} />
      <RelationshipPicker onChange={handleRelationshipChange} />
      <TextAreaEditor onChange={handleTextChange} />
      <FontPicker onChange={handleFontChange} />
      <Button width={'100%'} isDisabled={!isActive}>
        생성하기
      </Button>
    </section>
  );
};

export default Message;
