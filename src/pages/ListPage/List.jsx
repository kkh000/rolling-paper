import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buttom from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import createAxiosInstance from '../../utils/axios';
import Card from '../ListPage/Card/Card';
import css from './List.module.scss';

const List = () => {
  const axios = createAxiosInstance();
  const [bestRollingList, setBestRollingList] = useState([]);
  const [newRollingList, setNewRollingList] = useState([]);
  const [loadData, setLoadData] = useState(false);

  const rollingData = async type => {
    try {
      if (type === 'best') {
        const response = await axios.get(`/recipients/?limit=1000&sort=like`);
        setBestRollingList(response.data.results);
      } else {
        const response = await axios.get(`/recipients/?limit=1000`);
        setNewRollingList(response.data.results);
      }
    } catch (error) {
      console.log('ERROR : ', error.messages);
    }
  };

  useEffect(() => {
    if (!loadData) {
      rollingData('best');
      rollingData('new');
      setLoadData(true);
    }
  }, [bestRollingList]);

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
                  messages={data.recentMessages}
                  reactions={data.topReactions}
                  backgroundImage={data.backgroundImageURL}
                  backgroundColor={data.backgroundColor}
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
                  messages={data.recentMessages}
                  reactions={data.topReactions}
                  backgroundImage={data.backgroundImageURL}
                  backgroundColor={data.backgroundColor}
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
