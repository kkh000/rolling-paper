import Bar from './Bar/Bar';
import CardList from './CardList/CardList';
import css from './Post.module.scss';
const Post = () => {
  return (
    <div className={css.layout}>
      <Bar />
      <CardList />
    </div>
  );
};
export default Post;
