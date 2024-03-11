import { useLocation, useNavigate } from 'react-router-dom';
import {
  ARROW_BACK_ICON,
  BACKGROUND_COLOR_VALUE_LIST,
  SEARCH_NULL_IMAGE,
} from '../../constant/constant';
import Card from '../ListPage/Card/Card';
import css from './Search.module.scss';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rollingList = location.state?.data || [];
  const keyword = location.state?.keyword || '';
  return (
    <div className={css.layout}>
      <div className={css.box}>
        <div className={css.header}>
          <div className={css.titleBox}>
            <h2 className={css.title}>검색 결과🤡</h2>
            <p className={css.description}>
              <span className={css.keyword}>{`"${keyword}"`}</span>을(를) 검색한 결과입니다.
            </p>
          </div>
          <button
            className={css.button}
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={ARROW_BACK_ICON} alt='뒤로가기' />
            뒤로가기
          </button>
        </div>
        {rollingList.length === 0 && (
          <div className={css.null}>
            <img src={SEARCH_NULL_IMAGE} alt='푸바오' />
            <p>검색 결과가 없다옹🐼</p>
            <div className={css.layer}></div>
          </div>
        )}
        <section className={css.cardBox}>
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
    </div>
  );
};

export default Search;
