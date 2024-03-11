import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import Bar from './Bar/Bar';
import CardList from './CardList/CardList';
import css from './Post.module.scss';
import BarSkeleton from './Skeleton/BarSkeleton';
import CardListSkeleton from './Skeleton/CardListSkeleton';
const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { data: response, isLoading, error } = useFetchData(`recipients/${id}/`);
  const { name, recentMessages, messageCount, backgroundColor, backgroundImageURL } = data;
  const navigate = useNavigate();

  useEffect(() => {
    if (response) setData(response);
  }, [response]);

  if (error) return navigate('/notFound');

  return (
    <div className={css.layout}>
      {isLoading ? (
        <BarSkeleton />
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
