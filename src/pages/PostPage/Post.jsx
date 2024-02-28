import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Post ID: {id}</h2>
    </div>
  );
};

export default Post;
