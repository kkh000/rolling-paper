import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { MAIN_IMAGE_01, MAIN_IMAGE_02 } from '../../constant/constant';
import css from './Home.module.scss';

const Home = () => {
  return (
    <section className={css.layout}>
      <article className={css.point01}>
        <div className={css.textBox}>
          <p className={css.pointNumber}>Point. 01</p>
          <h1 className={css.title}>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h1>
          <p className={css.description}>로그인 없이 자유롭게 만들어요.</p>
        </div>
        <img className={css.mainImage} src={MAIN_IMAGE_01} alt='롤링 소개 이미지' />
      </article>
      <article className={css.point02}>
        <div className={css.textBox}>
          <p className={css.pointNumber}>Point. 02</p>
          <h1 className={css.title}>서로에게 이모지로 감정을 표현해보세요</h1>
          <p className={css.description}>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </div>
        <img className={css.mainImage} src={MAIN_IMAGE_02} alt='롤링 소개 이미지' />
      </article>
      <Link to='/list'>
        <Button width={'280px'}>구경해보기</Button>
      </Link>
    </section>
  );
};

export default Home;
