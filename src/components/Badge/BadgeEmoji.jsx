import css from './BadgeEmoji.module.scss';

const BadgeEmoji = ({ emoji, count }) => {
  return (
    <div className={css.badgeEmoji}>
      <div className={css.emoji}>{emoji}</div>
      <div className={css.emojiCount}>{count}</div>
    </div>
  );
};

export default BadgeEmoji;
