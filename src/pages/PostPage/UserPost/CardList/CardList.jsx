import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Card from './Card';
import css from './CardList.module.scss';

const CardList = () => {
  return (
    <div className={css.cardArea}>
      <div className={css.cardBox}>
        <div className={css.card}>
          {/* onClick에 /post/{id}/message 로 가는 이벤트핸들러 넣어줘야됨 */}
          <RoundedPlusButton />
        </div>
        {/* data 받아서 map 돌릴예정 */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
