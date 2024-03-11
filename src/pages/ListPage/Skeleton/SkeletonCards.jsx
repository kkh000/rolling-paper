import css from './SkeletonCards.module.scss';
const SkeletonCard = () => {
  return (
    <article className={css.layout}>
      <div className={css.contents}>
        <div className={css.title} />
        <div className={css.profilesBox} />
        <div className={css.text}></div>
      </div>
      <div className={css.line} />
      <div className={css.emojiBox}>
        <div className={css.emoji} />
        <div className={css.emoji} />
        <div className={css.emoji} />
      </div>
    </article>
  );
};

const skeletonCards = () => {
  return Array(4)
    .fill(null)
    .map((_, idx) => <SkeletonCard key={idx} />);
};
export default skeletonCards;
