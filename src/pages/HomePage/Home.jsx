import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { MAIN_IMAGE_01, MAIN_IMAGE_02 } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import css from './Home.module.scss';

const Home = () => {
  const homePointList = [
    {
      id: '01',
      title: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
      description: '로그인 없이 자유롭게 만들어요.',
      image: MAIN_IMAGE_01,
    },
    {
      id: '02',
      title: '서로에게 이모지로 감정을 표현해보세요',
      description: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
      image: MAIN_IMAGE_02,
    },
  ];

  return (
    <section className={css.layout}>
      {homePointList.map(({ id, title, description, image }) => (
        <article key={id} className={cn(css[`point${id}`])}>
          <div className={css.textBox}>
            <p className={css.pointNumber}>Point. {id}</p>
            <h1 className={css.title}>{title}</h1>
            <p className={css.description}>{description}</p>
          </div>
          <img className={css.mainImage} src={image} alt='롤링 소개 이미지' />
        </article>
      ))}
      <Link to='/list'>
        <Button width={'280px'}>구경해보기</Button>
      </Link>
    </section>
  );
};

export default Home;
