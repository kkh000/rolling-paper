import css from './CardSkeleton.module.scss';

const CardSkeleton = () => {
  return (
    <div className={css.layout}>
      <section className={css.header}>
        <div className={css.circle} />
        <div className={css.profile}>
          <div className={css.name}></div>
          <div className={css.badge}></div>
        </div>
      </section>
      <div className={css.divider} />
      <div className={css.content}>
        <p className={css.textBox} />
      </div>
      <div className={css.createdAt}></div>
    </div>
  );
};

export default CardSkeleton;
