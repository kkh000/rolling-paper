import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import BadgeEmoji from '../../../../components/Badge/BadgeEmoji';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import { ARROW_DOWN_ICON } from '../../../../constant/constant';
import createAxiosInstance from '../../../../utils/axios';
import css from './Emoji.module.scss';

//TODO : recipient_id로 이모지 조회 필요
const emojiList = () => {
  const testData = [
    {
      id: 34,
      emoji: '🥰',
      count: 8,
    },
    {
      id: 28,
      emoji: '😄',
      count: 7,
    },
  ];
  return testData;
};

const Emoji = () => {
  const [emojiBoxToggle, setEmojiBoxToggle] = useState(false);
  const handleEmojiBoxClick = () => {
    setEmojiBoxToggle(!emojiBoxToggle);
  };
  ////////// ~~~~

  const axiosInstance = createAxiosInstance();
  const { id } = useParams();

  const [showPicker, setShowPicker] = useState(false);

  const [emojiData, setEmojiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMainEmojiData();
      setEmojiData(data);
    };

    fetchData();
  }, [id]);

  const handlePickerButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = emojiObject => {
    postEmojiData(emojiObject);
  };

  const postEmojiData = async emojiObject => {
    try {
      const response = await axiosInstance.post(`/recipients/${id}/reactions/`, {
        emoji: `${emojiObject.emoji}`,
        type: 'increase',
      });

      console.log('POST 요청 성공:', response.data);
    } catch (error) {
      console.error('POST 요청 에러:', error);
    }
  };

  const getMainEmojiData = async () => {
    try {
      const response = await axiosInstance.get(`/recipients/${id}/reactions/?limit=3`);
      console.log('GET 요청 성공:', response.data.results);
      return response.data.results;
    } catch (error) {
      console.log('GET 요청 에러:', error);
    }
  };

  return (
    <div className={css.emojiArea}>
      <div className={css.reactionArea}>
        <div className={css.reaction}>
          {/* TODO: 3개까지만 불러와야 함 */}
          {emojiData.length > 0 &&
            emojiData.map(emoji => (
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
          <div className={css.reactions}>
            {emojiList().length > 0 &&
              emojiList().map(emoji => (
                <BadgeEmoji key={emoji.id} emoji={emoji.emoji} count={emoji.count}></BadgeEmoji>
              ))}
          </div>
        )}
      </div>
      <div className={css.addEmojiButton}>
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
