import { useLocation } from 'react-router-dom';
import { BACKGROUND_COLOR_VALUE_LIST } from '../../constant/constant';
import Card from '../ListPage/Card/Card';
import css from './Search.module.scss';

const Search = () => {
  const location = useLocation();
  const rollingList = location.state?.data || [];
  return (
    <div className={css.layout}>
      <h2 className={css.title}>검색 결과🤡</h2>
      {rollingList.length === 0 && <div>검색한 결과가 없습니다!</div>}
      <section className={css.box}>
        {rollingList.map(data => (
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
      </section>
    </div>
  );
};

export default Search;
