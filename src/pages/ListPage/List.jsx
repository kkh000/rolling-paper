import { Link } from 'react-router-dom';
import Buttom from '../../components/Button/Button';
import Card from '../ListPage/Card/Card';
import css from './List.module.scss';

const List = () => {
  //TODO : 인기 롤링 페이퍼, 최신 롤링 페이퍼 데이터 받아오기
  //TODO : Carousel적용 필요
  const bestRollingList = [
    {
      id: 827,
      name: '용섭',
      backgroundColor: 'beige',
      backgroundImageURL: null,
      createdAt: '2023-12-04T06:03:57.810538Z',
      messageCount: 0,
      recentMessages: [
        {
          id: 28,
          recipientId: 11,
          sender: 'test user2',
          profileImageURL:
            'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
          relationship: '지인',
          content: '테스트 목적의 메세지3',
          font: '나눔명조',
          createdAt: '2023-10-31T09:58:47.272896Z',
        },
        {
          id: 27,
          recipientId: 11,
          sender: 'test user2',
          profileImageURL:
            'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
          relationship: '지인',
          content: '테스트 목적의 메세지3',
          font: '나눔명조',
          createdAt: '2023-10-31T09:58:46.889479Z',
        },
      ],
      reactionCount: 0,
      topReactions: [
        {
          id: 24,
          emoji: '😀',
          count: 15,
        },
        {
          id: 25,
          emoji: '🥹',
          count: 8,
        },
      ],
    },
    {
      id: 163,
      name: '고양이',
      backgroundColor: 'beige',
      backgroundImageURL: null,
      createdAt: '2023-11-10T06:05:40.824084Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 27,
      name: '강아지',
      backgroundColor: 'beige',
      backgroundImageURL: 'https://www.notion.so/codeit/API-f431f6b5e2a84d1fbc483eb87742261d',
      createdAt: '2023-11-08T03:45:43.340124Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 26,
      name: '사슴',
      backgroundColor: 'beige',
      backgroundImageURL: 'https://www.notion.so/codeit/API-f431f6b5e2a84d1fbc483eb87742261d',
      createdAt: '2023-11-08T03:40:58.830363Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
  ];

  const newRollingList = [
    {
      id: 827,
      name: '새로운아이1',
      backgroundColor: 'beige',
      backgroundImageURL: null,
      createdAt: '2023-12-04T06:03:57.810538Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 163,
      name: '새로운아이2',
      backgroundColor: 'beige',
      backgroundImageURL: null,
      createdAt: '2023-11-10T06:05:40.824084Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 27,
      name: '새로운아이3',
      backgroundColor: 'beige',
      backgroundImageURL: 'https://www.notion.so/codeit/API-f431f6b5e2a84d1fbc483eb87742261d',
      createdAt: '2023-11-08T03:45:43.340124Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 26,
      name: '새로운아이4',
      backgroundColor: 'beige',
      backgroundImageURL: 'https://www.notion.so/codeit/API-f431f6b5e2a84d1fbc483eb87742261d',
      createdAt: '2023-11-08T03:40:58.830363Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
  ];

  console.log('::bestRollingList::', bestRollingList);

  return (
    <div>
      <section className={css.sectionArea}>
        <h1 className={css.title}>인기 롤링 페이퍼🔥</h1>
        <div className={css.paperList}>
          {/* <Carousel> */}
          {bestRollingList.map &&
            bestRollingList.map(data => (
              <Card
                key={data.id}
                name={data.name}
                messages={data.recentMessages}
                reactions={data.topReactions}
              />
            ))}
          {/* </Carousel> */}
        </div>
      </section>
      <section className={css.sectionArea}>
        <h1 className={css.title}>최근에 만든 롤링 페이퍼 ⭐️</h1>
        <div className={css.paperList}>
          {/* <Carousel> */}
          {newRollingList.map &&
            newRollingList.map(data => (
              <Card
                key={data.id}
                name={data.name}
                messages={data.recentMessages}
                reactions={data.topReactions}
              />
            ))}
          {/* </Carousel> */}
        </div>
      </section>
      <section className={css.buttomArea}>
        <Link to='/post' className={css.button}>
          <Buttom width={'17.5rem'}>나도 만들어보기</Buttom>
        </Link>
      </section>
    </div>
  );
};

export default List;
