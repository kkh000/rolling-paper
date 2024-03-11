import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import Bar from './Bar/Bar';
import CardList from './CardList/CardList';
import css from './Post.module.scss';
import CardListSkeleton from './Skeleton/CardListSkeleton';
const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { data: response, isLoading } = useFetchData(`recipients/${id}/`);
  const { name, recentMessages, messageCount, backgroundColor, backgroundImageURL } = data;

  useEffect(() => {
    if (response) setData(response);
  }, [response]);

  return (
    <div className={css.layout}>
      {isLoading ? (
        <div>barLoding...</div>
      ) : (
        <Bar name={name} messages={recentMessages} messageCount={messageCount} />
      )}
      {isLoading ? (
        <CardListSkeleton />
      ) : (
        <CardList backgroundColor={backgroundColor} backgroundImageURL={backgroundImageURL} />
      )}
    </div>
  );
};
export default Post;
