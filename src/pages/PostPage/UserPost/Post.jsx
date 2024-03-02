import RoundedPlusButton from '../../../components/Button/RoundedPlusButton';
import Bar from './Bar/Bar';
import Card from './Bar/Card';
import css from './Post.module.scss';

const Post = () => {
  return (
    <div className={css.layout}>
      <Bar />
      <div className={css.cardArea}>
        <div className={css.cardBox}>
          <div className={css.card}>
            {/* onClick에 /post/{id}/message 로 가는 이벤트핸들러 넣어줘야됨 */}
            <RoundedPlusButton />
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Post;
