import Badge from '../../../../components/Badge/Badge';
import Profile from '../../../../components/Profile/Profile';
import css from './Card.module.scss';

const Card = () => {
  return (
    <div className={css.layout}>
      <section className={css.header}>
        <Profile />
        <div className={css.profile}>
          <p>
            From. <span className={css.name}>이름</span>
          </p>
          <Badge relationship='지인' />
        </div>
      </section>
      <div className={css.divider} />
      <div className={css.content}>
        <p>롤링페이퍼 내용</p>
      </div>
      <div className={css.createdAt}>2024.03.02</div>
    </div>
  );
};

export default Card;
