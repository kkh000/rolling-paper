import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import BadgeEmoji from '../../../../components/Badge/BadgeEmoji';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import { ARROW_DOWN_ICON } from '../../../../constant/constant';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import createAxiosInstance from '../../../../utils/axios';
import css from './Emoji.module.scss';

const Emoji = () => {
  const { id } = useParams();
  const axios = createAxiosInstance();
  const emojiPickerRef = useRef(null);
  const emojiBoxRef = useRef(null);
  const [emojiBoxToggle, setEmojiBoxToggle] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [emojiData, setEmojiData] = useState([]);
  const [pickEmoji, setPickEmoji] = useState('');
  const url = `/recipients/${id}/reactions/`;

  const postEmojiData = async emojiObject => {
    try {
      await axios.post(url, {
        emoji: `${emojiObject.emoji}`,
        type: 'increase',
      });
    } catch (error) {
      console.error('POST 요청 에러:', error);
    }
  };

  useEffect(() => {
    const loadEmojiData = async () => {
      try {
        const { data } = await axios.get(url);
        setEmojiData(data.results);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    loadEmojiData();
    setPickEmoji('');
  }, [pickEmoji]);

  const handleEmojiBoxClick = () => {
    setEmojiBoxToggle(!emojiBoxToggle);
  };

  const handlePickerButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = async emojiObject => {
    await postEmojiData(emojiObject);
    setPickEmoji(emojiObject.emoji);
    setShowPicker(false);
  };

  useOutsideClick(emojiBoxRef, () => setEmojiBoxToggle(false));
  useOutsideClick(emojiPickerRef, () => setShowPicker(false));

  return (
    <div className={css.emojiArea}>
      <div ref={emojiBoxRef} className={css.emojiBadgeBox}>
        <div className={css.mainEmojiBadge}>
          {emojiData.slice(0, 3).map(emoji => (
            <BadgeEmoji key={emoji.id} emoji={emoji.emoji} count={emoji.count}></BadgeEmoji>
          ))}
          <img
            className={css.arrowDown}
            src={ARROW_DOWN_ICON}
            onClick={handleEmojiBoxClick}
            alt='arrow_down'
          />
        </div>
        {emojiBoxToggle && (
          <div className={css.allEmojiBadge}>
            {emojiData.map(emoji => (
              <BadgeEmoji key={emoji.id} emoji={emoji.emoji} count={emoji.count}></BadgeEmoji>
            ))}
          </div>
        )}
      </div>
      <div ref={emojiPickerRef} className={css.addEmojiButton}>
        <OutlinedButton hasIcon='true' size='medium' onClick={handlePickerButtonClick}>
          <p className={css.emojiContent}>추가</p>
        </OutlinedButton>
        {showPicker && (
          <div className={css.emojiPicker}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Emoji;
