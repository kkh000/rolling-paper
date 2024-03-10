import { useState } from 'react';
import { useEffect } from 'react';
import AutoSearching from '../../components/AutoSearching/AutoSearching';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import { BACKGROUND_COLOR_VALUE_LIST } from '../../constant/constant';
import useFetchData from '../../hooks/useFetchData';
import Card from '../ListPage/Card/Card';
import css from './List.module.scss';

const List = () => {
  const [bestRollingList, setBestRollingList] = useState([]);
  const [newRollingList, setNewRollingList] = useState([]);
  const { data: bestResponse, isLoading: bestLoading } = useFetchData(
    `/recipients/?limit=10&sort=like`,
  );
  const { data: newResponse, isLoading: newLoading } = useFetchData(`/recipients/?limit=1000`);
  const skeletonCards = count => {
    return Array(count)
      .fill(null)
      .map((_, idx) => <Card key={idx} backgroundColor='#cccccc' skeleton />);
  };

  useEffect(() => {
    if (bestResponse && bestResponse.results) {
      setBestRollingList(bestResponse.results);
    }
  }, [bestResponse]);

  useEffect(() => {
    if (newResponse && newResponse.results) {
      setNewRollingList(newResponse.results);
    }
  }, [newResponse]);

  return (
    <div className={css.layout}>
      <section className={css.box}>
        <div className={css.searchBox}>
          <AutoSearching dataList={newResponse} />
        </div>
        <article className={css.article}>
          <h2 className={css.title}>인기 롤링 페이퍼🔥</h2>
          <Carousel>
            {bestLoading
              ? skeletonCards(4)
              : bestRollingList.map(data => (
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
        </article>
        <article className={css.article}>
          <h2 className={css.title}>최근에 만든 롤링 페이퍼 ⭐️</h2>
          <Carousel>
            {newLoading
              ? skeletonCards(4)
              : newRollingList
                .slice(0, 10)
                .map(data => (
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
        </article>
        <div className={css.buttonBox}>
          <Button width={'100%'}>나도 만들어보기</Button>
        </div>
      </section>
    </div>
  );
};

export default List;
