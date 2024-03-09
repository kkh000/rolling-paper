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
  const nameSlice = name => {
    if (name.length > 20) {
      name = name.slice(0, 21) + '...';
    }
    return name;
  };

  let baseColor = backgroundImage ? 'white' : '';
  let background = backgroundImage ? `url(${backgroundImage})` : backgroundColor;

  return (
    <Link to={`/post/${id}`} className={css.removeLinkDecoration}>
      <div className={cn(css.cardArea, css[baseColor])} style={{ background: `${background}` }}>
        <div className={cn(css.cardLayerArea, css[baseColor])} />
        <div className={css.contents}>
          <p className={css.titie}>To. {nameSlice(name)}</p>
          <div className={css.profilesArea}>
            <Profiles profileList={messages} size='xSmall' messageCount={messageCount} />
          </div>
          <div className={css.writerCount}>
            <p className={css.count}>{messageCount}</p>명이 작성했어요!
          </div>
          <div className={css.line} />
        </div>
        <div className={css.emojiArea}>
          {reactions.slice(0, 3).map(item => (
            <BadgeEmoji key={item.id} emoji={item.emoji} count={item.count} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
