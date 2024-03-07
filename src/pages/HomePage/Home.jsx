import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { HOME_ARTICLE_LIST } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import css from './Home.module.scss';

const Home = () => {
  return (
    <section className={css.layout}>
      {HOME_ARTICLE_LIST.map(({ id, title, description, image }) => (
        <article key={id} className={cn(css[`point${id}`])}>
          <div className={css.textBox}>
            <p className={css.pointNumber}>Point. {id}</p>
            <h1 className={css.title}>{title}</h1>
            <p className={css.description}>{description}</p>
          </div>
          <img className={css.articleImage} src={image} alt='롤링 소개 이미지' />
        </article>
      ))}
      <Link to='/list'>
        <div className={css.listLinkButton}>
          <Button width={'100%'}>구경해보기</Button>
        </div>
      </Link>
    </section>
  );
};

export default Home;
