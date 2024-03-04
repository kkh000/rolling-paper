import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { RELATIONSHIP_LIST, FONT_LIST } from '../../../constant/constant';
import createAxiosInstance from '../../../utils/axios';
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

  const handleNameChange = inputValue => {
    setName(inputValue);
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

  const handleSubmit = async event => {
    event.preventDefault();
    const axios = createAxiosInstance();
    const messageData = {
      sender: name,
      recipientId: 3942,
      relationship: relationship,
      content: text,
      font: font,
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      createdAt: new Date().toISOString(),
    };
    console.log(messageData);
    try {
      const result = await axios.post(`/recipients/3942/messages/`, messageData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(image);
  return (
    <form onSubmit={handleSubmit} className={css.layout}>
      <InputName onChange={handleNameChange} />
      <ProfileImagePicker onChange={handleImageChange} />
      <RelationshipPicker onChange={handleRelationshipChange} />
      <TextAreaEditor onChange={handleTextChange} />
      <FontPicker onChange={handleFontChange} />
      <Button width={'100%'} isDisabled={!isActive}>
        생성하기
      </Button>
    </form>
  );
};

export default Message;
