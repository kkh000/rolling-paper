import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import Bar from './Bar/Bar';
import CardList from './CardList/CardList';
import css from './Post.module.scss';
const Post = () => {
  const { id } = useParams();
  const { data: response, isLoading } = useFetchData(`recipients/${id}/`);

  if (isLoading) {
    return <div>Ladoing...</div>;
  }

  if (!response) {
    return <div>no Data</div>;
  }

  const { name, recentMessages, messageCount, backgroundColor, backgroundImageURL } = response;

  return (
    <div className={css.layout}>
      <Bar name={name} messages={recentMessages} messageCount={messageCount} />
      <CardList backgroundColor={backgroundColor} backgroundImageURL={backgroundImageURL} />
    </div>
  );
};
export default Post;
