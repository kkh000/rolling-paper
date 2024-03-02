import Bar from './Bar/Bar';
import css from './Post.module.scss';
const Post = () => {
  return (
    <div className={css.layout}>
      <Bar />
    </div>
  );
};
export default Post;
