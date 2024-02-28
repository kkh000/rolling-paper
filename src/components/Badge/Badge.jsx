import css from './Badge.module.scss';

const Badge = ({ relationship }) => {
  const selectedRelationship = {
    지인: css.other,
    동료: css.coworker,
    가족: css.family,
    친구: css.friend,
  };

  const selectedStyle = selectedRelationship[relationship];

  return <div className={selectedStyle}>{relationship}</div>;
};

export default Badge;
