import { Link } from 'react-router-dom';
import Buttom from '../../components/Button/Button';
import Card from '../ListPage/Card/Card';
import css from './List.module.scss';

const List = () => {
  //TODO : 인기 롤링 페이퍼, 최신 롤링 페이퍼 데이터 받아오기
  //TODO : Carousel적용 필요

  const bestRollingList = [];
  const newRollingList = [];

  return (
    <div>
      <section className={css.sectionArea}>
        <h1 className={css.title}>인기 롤링 페이퍼🔥</h1>
        <div className={css.paperList}>
          {bestRollingList.map &&
            bestRollingList.map(data => (
              <Card
                key={data.id}
                name={data.name}
                messages={data.recentMessages}
                reactions={data.topReactions}
              />
            ))}
        </div>
      </section>
      <section className={css.sectionArea}>
        <h1 className={css.title}>최근에 만든 롤링 페이퍼 ⭐️</h1>
        <div className={css.paperList}>
          {newRollingList.map &&
            newRollingList.map(data => (
              <Card
                key={data.id}
                name={data.name}
                messages={data.recentMessages}
                reactions={data.topReactions}
              />
            ))}
        </div>
      </section>
      <section className={css.buttomArea}>
        <Link to='/post' className={css.button}>
          <Buttom size={280}>나도 만들어보기</Buttom>
        </Link>
      </section>
    </div>
  );
};

export default List;
