import BadgeEmoji from '../../../components/Badge/BadgeEmoji';
import Profiles from '../../../components/Profiles/Profiles';
import { cn } from '../../../utils/classNames';
import css from '../Card/Card.module.scss';

const Card = ({ name, messages, reactions, backgroundImage, backgroundColor }) => {
  const nameSlice = name => {
    if (name.length > 20) {
      name = name.slice(0, 21) + '...';
    }
    return name;
  };

  let baseColor = 'black';
  let background = backgroundColor;
  if (backgroundImage) {
    baseColor = 'white';
    background = `url(${backgroundImage})`;
  }

  return (
    <div className={cn(css.cardArea, css[baseColor])} style={{ background: `${background}` }}>
      <div className={cn(css.cardLayerArea, css[baseColor])} />
      <div className={css.contents}>
        <p className={css.titie}>To. {nameSlice(name)}</p>
        <div style={{ color: 'black' }}>
          <Profiles profileList={messages} />
        </div>
        <div className={css.writerCount}>
          <p className={css.count}>{messages.length}</p>명이 작성했어요!
        </div>
        <div className={cn(css.line, css[baseColor])} />
      </div>
      <div className={css.emojiArea}>
        {reactions.slice(0, 3).map(item => (
          <BadgeEmoji key={item.id} emoji={item.emoji} count={item.count} />
        ))}
      </div>
    </div>
  );
};

export default Card;
