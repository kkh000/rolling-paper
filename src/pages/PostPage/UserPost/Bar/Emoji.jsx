import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import BadgeEmoji from '../../../../components/Badge/BadgeEmoji';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import { ARROW_DOWN_ICON } from '../../../../constant/constant';
import createAxiosInstance from '../../../../utils/axios';
import css from './Emoji.module.scss';

const Emoji = () => {
  const { id } = useParams();
  const axios = createAxiosInstance();
  const emojiPickerRef = useRef(null);
  const emojiBoxRef = useRef(null);
  const [emojiBoxToggle, setEmojiBoxToggle] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [mainEmojiData, setMainEmojiData] = useState([]);
  const [emojiData, setEmojiData] = useState([]);
  const [pickEmoji, setPickEmoji] = useState('');

  const postEmojiData = async emojiObject => {
    try {
      await axios.post(`/recipients/${id}/reactions/`, {
        emoji: `${emojiObject.emoji}`,
        type: 'increase',
      });
    } catch (error) {
      console.error('POST 요청 에러:', error);
    }
  };

  useEffect(() => {
    const loadEmojiData = async () => {
      const getEmojiData = async (limit = null) => {
        const endpoint = limit ? `?limit=${limit}` : '';
        try {
          const response = await axios.get(`/recipients/${id}/reactions/${endpoint}`);
          return response.data.results;
        } catch (error) {
          console.log('GET 요청 에러:', error);
        }
      };

      try {
        const mainEmoji = await getEmojiData(3);
        const allEmoji = await getEmojiData();
        setMainEmojiData(mainEmoji);
        setEmojiData(allEmoji);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    loadEmojiData();
    setPickEmoji('');
  }, [pickEmoji]);

  useEffect(() => {
    const handleDocumentClick = event => {
      if (emojiBoxRef.current && !emojiBoxRef.current.contains(event.target)) {
        setEmojiBoxToggle(false);
      }
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [emojiPickerRef, emojiBoxRef]);

  const handleEmojiBoxClick = () => {
    setEmojiBoxToggle(!emojiBoxToggle);
  };

  const handlePickerButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = async emojiObject => {
    await postEmojiData(emojiObject);
    setPickEmoji(emojiObject.emoji);
  };

  return (
    <div className={css.emojiArea}>
      <div ref={emojiBoxRef} className={css.emojiBadgeBox}>
        <div className={css.mainEmojiBadge}>
          {mainEmojiData?.length > 0 &&
            mainEmojiData.map(emoji => (
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
            {emojiData?.length > 0 &&
              emojiData.map(emoji => (
                <BadgeEmoji key={emoji.id} emoji={emoji.emoji} count={emoji.count}></BadgeEmoji>
              ))}
          </div>
        )}
      </div>
      <div ref={emojiPickerRef} className={css.addEmojiButton}>
        <OutlinedButton hasIcon='true' size='medium' onClick={handlePickerButtonClick}>
          추가
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
