import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buttom from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import { BACKGROUND_COLOR_VALUE_LIST } from '../../constant/constant';
import useFetchData from '../../hooks/useFetchData';
import Card from '../ListPage/Card/Card';
import css from './List.module.scss';

const List = () => {
  const [bestRollingList, setBestRollingList] = useState([]);
  const [newRollingList, setNewRollingList] = useState([]);

  const { data: bestResponse } = useFetchData(`/recipients/?limit=1000&sort=like`);
  const { data: newResponse } = useFetchData(`/recipients/?limit=1000`);

  useEffect(() => {
    if (newResponse && newResponse.results && bestResponse && bestResponse.results) {
      setBestRollingList(bestResponse.results);
      setNewRollingList(newResponse.results);
    }
  }, [bestResponse, newResponse]);

  return (
    <div className={css.section}>
      <section className={css.sectionArea}>
        <h1 className={css.title}>인기 롤링 페이퍼🔥</h1>
        <div className={css.paperList}>
          <Carousel>
            {bestRollingList &&
              bestRollingList.map(data => (
                <Card
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  messageCount={data.messageCount}
                  messages={data.recentMessages}
                  reactions={data.topReactions}
                  backgroundImage={data.backgroundImageURL}
                  backgroundColor={BACKGROUND_COLOR_VALUE_LIST[data.backgroundColor]}
                />
              ))}
          </Carousel>
        </div>
      </section>
      <section className={css.sectionArea}>
        <h1 className={css.title}>최근에 만든 롤링 페이퍼 ⭐️</h1>
        <div className={css.paperList}>
          <Carousel>
            {newRollingList &&
              newRollingList.map(data => (
                <Card
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  messageCount={data.messageCount}
                  messages={data.recentMessages}
                  reactions={data.topReactions}
                  backgroundImage={data.backgroundImageURL}
                  backgroundColor={BACKGROUND_COLOR_VALUE_LIST[data.backgroundColor]}
                />
              ))}
          </Carousel>
        </div>
      </section>
      <section className={css.buttomArea}>
        <div className={css.linkButton}>
          <Link to='/post' className={css.button}>
            <Buttom width={'100%'}>나도 만들어보기</Buttom>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default List;
