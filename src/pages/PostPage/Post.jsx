import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  console.log(id);
  return <div>post</div>;
};

export default Post;
