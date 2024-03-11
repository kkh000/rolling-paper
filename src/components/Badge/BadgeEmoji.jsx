import { cn } from '../../utils/classNames';
import css from './BadgeEmoji.module.scss';

const BadgeEmoji = ({ emoji, count, size }) => {
  return (
    <div className={cn(css.badgeEmoji, size === 'card' && css.badgeEmojiCard)}>
      <div className={css.emoji}>{emoji}</div>
      <div className={css.emojiCount}>{count}</div>
    </div>
  );
};

export default BadgeEmoji;
