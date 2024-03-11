import css from './CardListSkeleton.module.scss';
import CardSkeleton from './CardSkeleton';

const CardListSkeleton = () => {
  return (
    <div className={css.layout}>
      <div className={css.cardBox}>
        <div className={css.card}>
          <div className={css.plus} />
        </div>
        {Array(5)
          .fill(null)
          .map((_, idx) => (
            <CardSkeleton key={idx} />
          ))}
      </div>
    </div>
  );
};

export default CardListSkeleton;
