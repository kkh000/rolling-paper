import Profiles from '../../../../components/Profiles/Profiles';
import css from './WritingCount.module.scss';

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

const WritingCount = () => {
  return (
    <div className={css.writeArea}>
      <Profiles />
      <div className={css.writingCount}>
        <p className={css.count}>{writeCount}</p>명이 작성했어요!
      </div>
    </div>
  );
};

export default WritingCount;
