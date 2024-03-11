import { cn } from '../../../utils/classNames';
import css from './SkeletonCards.module.scss';
const SkeletonCard = () => {
  return (
    <article className={css.layout}>
      <div className={css.contents}>
        <div className={cn(css.title, css.loading)} />
        <div className={cn(css.profilesBox, css.loading)} />
        <div className={cn(css.text, css.loading)}></div>
      </div>
      <div className={css.line} />
      <div className={cn(css.emojiBox, css.loading)}>
        <div className={cn(css.emoji, css.loading)} />
        <div className={cn(css.emoji, css.loading)} />
        <div className={cn(css.emoji, css.loading)} />
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
