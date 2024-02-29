import { useState } from 'react';
import BadgeEmoji from '../BadgeEmoji/BadgeEmoji';
import Profiles from '../Profiles/Profiles';
import css from './Bar.module.scss';

//recipientId 이모지 조회를 위해 받아와야 함
const Bar = ({ recipientId, name }) => {
  const [emojiBoxToggle, setEmojiBoxToggle] = useState(false);
  const [shareBoxToggle, setShareBoxToggle] = useState(false);

  //TODO 테스트 후 제거 필요
  console.log('::recipientId::', recipientId);
  name = '테스트';

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

  //TODO : recipient_id로 메시지 목록 조회 필요
  const messageList = () => {
    const testData = [
      {
        id: 32,
        recipientId: 2,
        sender: '김하은',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '가족',
        content: '열심히 일하는 모습 멋있습니다.',
        font: 'Pretendard',
        createdAt: '2023-11-01T08:05:25.399056Z',
      },
      {
        id: 31,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z',
      },
    ];
    return testData;
  };

  const writeCount = messageList().length;

  const handleEmojiBoxClick = () => {
    setEmojiBoxToggle(!emojiBoxToggle);
  };

  const handleShareBoxClick = () => {
    setShareBoxToggle(!shareBoxToggle);
  };

  return (
    <div className={css.barArea}>
      <p className={css.name}> To. {name}</p>
      <div className={css.barContents}>
        <section className={css.writeArea}>
          <div className={css.profiles}>
            <Profiles />
          </div>
          <div className={css.profiles}>{messageList}</div>
          <div className={css.writingCount}>
            <p className={css.count}>{writeCount}</p>명이 작성했어요!
          </div>
        </section>
        <section className={css.emojiArea}>
          <div className={css.reactionArea}>
            <div className={css.reaction}>
              {/* TODO: 3개까지만 불러와야 함 */}
              {emojiList().length > 0 &&
                emojiList().map(emoji => (
                  <BadgeEmoji key={emoji.id} emoji={emoji.emoji} count={emoji.count}></BadgeEmoji>
                ))}
              <img
                className={css.arrowDown}
                src='/assets/arrow_down.svg'
                onClick={handleEmojiBoxClick}
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
          <div className={css.reactionAdd}>
            {/* TODO: 버튼 컴포넌트 불러오기 */}
            <button>추가</button>
          </div>
        </section>
        <section className={css.share}>
          <div className={css.shareImage} onClick={handleShareBoxClick}>
            <img src='/assets/share.svg' />
          </div>
          {shareBoxToggle && (
            <div className={css.shareArea}>
              {/* TODO: 공유 기능 추가 필요 */}
              <div className={css.shareSns}>
                <p className={css.shareSnsText}>카카오톡 공유</p>
              </div>
              <div className={css.shareSns}>
                <p className={css.shareSnsText}>URL 공유</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Bar;
