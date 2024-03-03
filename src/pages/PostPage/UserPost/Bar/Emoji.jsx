import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import BadgeEmoji from '../../../../components/Badge/BadgeEmoji';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import { ARROW_DOWN_ICON } from '../../../../constant/constant';
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

  const [showPicker, setShowPicker] = useState(false);

  const handelPickerButtonClick = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className={css.emojiArea}>
      <div className={css.reactionArea}>
        <div className={css.reaction}>
          {/* TODO: 3개까지만 불러와야 함 */}
          {emojiList().length > 0 &&
            emojiList().map(emoji => (
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
        <OutlinedButton size='medium' onClick={handelPickerButtonClick}>
          추가
        </OutlinedButton>
        {showPicker && (
          <div className={css.emojiPicker}>
            <EmojiPicker />
          </div>
        )}
      </div>
    </div>
  );
};

export default Emoji;
