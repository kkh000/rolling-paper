import css from './BadgeEmoji.module.scss';
/**
 * 이모지와 해당 이모지의 갯수를 받아서 이모지 뱃지를 만들어준다
 * @param {emoji, count} param0
 * @returns
 */
const BadgeEmoji = ({ emoji, count }) => {
  return (
    <div className={css.emojiArea}>
      <div className={css.emoji}>{emoji}</div>
      <div className={css.emojiCount}>{count}</div>
    </div>
  );
};

export default BadgeEmoji;
