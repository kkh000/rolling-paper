import { useState } from 'react';
import Button from '../../../components/Button/Button';
import ToggleButton from '../../../components/Button/ToggleButton';
import Input from '../../../components/Input/Input';
import { BACKGROUND_COLOR_LIST, BACKGROUND_IMAGE_URL_LIST } from '../../../constant/constant';
import createAxiosInstance from '../../../utils/axios';
import css from './NewPost.module.scss';
import OptionCardList from './OptionCardList/OptionCardList';

const NewPost = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedButton, setSelectedButton] = useState('color');
  const [selectedOption, setSelectedOption] = useState(0);

  const handleInputChange = value => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    setSelectedButton(prev => (prev === 'color' ? 'image' : 'color'));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const axios = createAxiosInstance();
    const newPostData = {
      name: inputValue,
      backgroundColor: BACKGROUND_COLOR_LIST[selectedOption],
      backgroundImageURL:
        selectedButton === 'color' ? null : BACKGROUND_IMAGE_URL_LIST[selectedOption],
    };

    try {
      const result = await axios.get('/recipients/', newPostData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={css.layout}>
      <form className={css.formBox} onSubmit={handleSubmit}>
        <div className={css.titleBox}>
          <h2 className={css.title}>To.</h2>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder='받을 사람을 입력해 주세요.'
          />
        </div>
        <div className={css.backgroundBox}>
          <h2 className={css.title}>배경화면을 선택해 주세요.</h2>
          <p className={css.description}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <div className={css.toggleButtonBox}>
            <ToggleButton selectedButton={selectedButton} onClick={handleButtonClick} />
          </div>
          <div className={css.cardListBox}>
            <OptionCardList
              selectedButton={selectedButton}
              selectedOption={selectedOption}
              onClick={setSelectedOption}
            />
          </div>
        </div>
        <Button fill width='100%'>
          생성하기
        </Button>
      </form>
    </section>
  );
};

export default NewPost;
