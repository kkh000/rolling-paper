import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { RELATIONSHIP_LIST, FONT_LIST, PROFILE_IMAGE_URL_LIST } from '../../../constant/constant';
import createAxiosInstance from '../../../utils/axios';
import FontPicker from './FontPicker/FontPicker';
import InputName from './InputName/InputName';
import css from './Message.module.scss';
import ProfileImagePicker from './ProfileImagePicker/ProfileImagePicker';
import RelationshipPicker from './RelationshipPicker/RelationshipPicker';
import TextAreaEditor from './TextAreaEditor/TextAreaEditor';

const Message = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(PROFILE_IMAGE_URL_LIST[0]);
  const [relationship, setRelationship] = useState(RELATIONSHIP_LIST[0]);
  const [font, setFont] = useState(FONT_LIST[0]);
  const { id } = useParams();
  const navigate = useNavigate();

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
      recipientId: id,
      relationship: relationship,
      content: text,
      font: font,
      profileImageURL: image,
      createdAt: new Date().toISOString(),
    };
    console.log(messageData);
    try {
      const result = await axios.post(`/recipients/${id}/messages/`, messageData);
      console.log(result);
      const destination = `/post/${id}`;
      navigate(destination);
    } catch (error) {
      console.error(error);
    }
  };

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
