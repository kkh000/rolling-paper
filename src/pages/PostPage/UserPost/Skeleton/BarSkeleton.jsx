import css from './BarSkeleton.module.scss';

export default function BarSkeleton() {
  return (
    <div className={css.layout}>
      <div className={css.name} />
      <div className={css.contents}>
        <div className={css.emojiBox}>
          <div className={css.emoji} />
          <div className={css.emoji} />
          <div className={css.emoji} />
        </div>
        <div className={css.writing} />
        <div className={css.share} />
      </div>
    </div>
  );
}
