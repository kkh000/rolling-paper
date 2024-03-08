import Badge from '../../../../components/Badge/Badge';
import Profile from '../../../../components/Profile/Profile';
import { createdDate } from '../../../../utils/createdDate';
import css from './Card.module.scss';

const Card = ({ content, createdAt, font, profileImageURL, relationship, sender, onClick }) => {
  const fontStyle = {
    fontFamily: font,
  };
  return (
    <div className={css.layout} onClick={onClick}>
      <section className={css.header}>
        <Profile imgUrl={profileImageURL} />
        <div className={css.profile}>
          <p>
            From. <span className={css.name}>{sender}</span>
          </p>
          <Badge relationship={relationship} />
        </div>
      </section>
      <div className={css.divider} />
      <div className={css.content}>
        <p style={fontStyle} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className={css.createdAt}>{createdDate(createdAt)}</div>
    </div>
  );
};

export default Card;
