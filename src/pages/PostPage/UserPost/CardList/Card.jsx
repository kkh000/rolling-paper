import dayjs from 'dayjs';
import Badge from '../../../../components/Badge/Badge';
import Profile from '../../../../components/Profile/Profile';
import css from './Card.module.scss';

const Card = ({ content, createdAt, font, imageURL, relationship, sender }) => {
  const createdDate = dayjs(createdAt).format('YYYY-MM-DD');
  return (
    <div className={css.layout}>
      <section className={css.header}>
        <Profile imgUrl={imageURL} />
        <div className={css.profile}>
          <p>
            From. <span className={css.name}>{sender}</span>
          </p>
          <Badge relationship={relationship} />
        </div>
      </section>
      <div className={css.divider} />
      <div className={css.content}>
        <p>
          {content}
          {font}
        </p>
      </div>
      <div className={css.createdAt}>{createdDate}</div>
    </div>
  );
};

export default Card;
