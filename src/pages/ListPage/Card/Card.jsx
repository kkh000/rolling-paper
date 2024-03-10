import { Link } from 'react-router-dom';
import BadgeEmoji from '../../../components/Badge/BadgeEmoji';
import Profiles from '../../../components/Profiles/Profiles';
import { cn } from '../../../utils/classNames';
import css from '../Card/Card.module.scss';

const Card = ({
  id,
  name,
  messageCount,
  messages = [],
  reactions = [],
  backgroundImage,
  backgroundColor,
}) => {
  const baseColor = backgroundImage ? 'white' : '';
  const background = backgroundImage ? `url(${backgroundImage})` : backgroundColor;

  return (
    <Link to={`/post/${id}`} className={css.link}>
      <article
        className={cn(css.layout, css[baseColor])}
        style={{ background: `${background}`, backgroundSize: 'cover' }}
      >
        <div className={css.contents}>
          <h2 className={css.titie}>To. {name}</h2>
          <div className={css.profilesArea}>
            <Profiles profileList={messages} size='xSmall' messageCount={messageCount} />
          </div>

          <p className={css.text}>
            <span className={css.count}>{messageCount}</span>명이 작성했어요!
          </p>
          <div className={css.line} />
        </div>
        <div className={css.emojiArea}>
          {reactions.slice(0, 3).map(item => (
            <BadgeEmoji key={item.id} emoji={item.emoji} count={item.count} size='card' />
          ))}
        </div>
        <div className={cn(css.cardLayer, css[baseColor])} />
      </article>
    </Link>
  );
};

export default Card;
