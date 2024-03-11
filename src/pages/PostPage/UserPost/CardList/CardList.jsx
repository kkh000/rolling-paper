import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import Button from '../../../../components/Button/Button';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import { BACKGROUND_COLOR_VALUE_LIST, ARROW_BACK_ICON } from '../../../../constant/constant';
import createAxiosInstance from '../../../../utils/axios';
import { createdDate } from '../../../../utils/createdDate';
import CardListSkeleton from '../Skeleton/CardListSkeleton';
import Card from './Card';
import css from './CardList.module.scss';

const CardList = ({ backgroundColor, backgroundImageURL }) => {
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessageData, setSelectedMessageData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMessageIdList, setSelectedMessageIdList] = useState([]);
  const { content, createdAt, font, profileImageURL, relationship, sender } = selectedMessageData;
  const pageSize = 8;
  const messagesDataURL = `recipients/${id}/messages/?limit=${currentPage * pageSize}`;

  const backgroundStyle = {
    backgroundColor: BACKGROUND_COLOR_VALUE_LIST[backgroundColor],
    backgroundImage: `url(${backgroundImageURL})`,
    backgroundSize: 'contain',
  };

  const fetchMessagesData = async url => {
    try {
      const {
        data: { results, next },
      } = await axios.get(url);
      setMessagesList(results);
      setCurrentPage(currentPage + 1);
      setHasNextPage(!!next);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessagesDataDebounced = useCallback(
    _debounce(() => {
      if (!hasNextPage) return;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      if (scrollHeight - scrollTop <= clientHeight + 700) {
        fetchMessagesData(messagesDataURL);
      }
    }, 50),
    [currentPage, hasNextPage],
  );

  const toggleModal = cardData => {
    setShowModal(!showModal);
    if (!showModal) {
      setSelectedMessageData(cardData);
    }
  };

  const handleSendMessageClick = e => {
    e.stopPropagation();
    navigate(`/post/${id}/message`);
  };

  const deleteTargetMessage = async id => {
    try {
      const deleteApiUrl = `messages/${id}/`;
      await axios.delete(deleteApiUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveClick = async () => {
    const isConfirm = confirm('정말 저장하시겠습니까?');
    if (isConfirm) {
      for (const id of selectedMessageIdList) {
        await deleteTargetMessage(id);
      }
      setSelectedMessageIdList([]);
      setIsEditing(false);
    }
  };

  const handleDeletePost = async id => {
    try {
      const isConfirm = confirm('정말 페이지를 삭제하시겠습니까?');
      if (isConfirm) {
        const deleteApiUrl = `recipients/${id}/`;
        await axios.delete(deleteApiUrl);
        navigate('/list');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isEditing) return;
    fetchMessagesData(messagesDataURL);
  }, [isEditing]);

  useEffect(() => {
    window.addEventListener('scroll', fetchMessagesDataDebounced);
    return () => {
      window.removeEventListener('scroll', fetchMessagesDataDebounced);
    };
  }, [currentPage]);

  if (isLoading) return <CardListSkeleton />;

  return (
    <div className={css.cardArea} style={backgroundStyle}>
      <div className={css.editButtonArea}>
        {isEditing ? (
          <>
            <OutlinedButton
              size='large'
              onClick={() => {
                handleDeletePost(id);
              }}
            >
              <span style={{ color: '#DC3A3A' }}>페이지 삭제하기</span>
            </OutlinedButton>
            <Button
              size={'s'}
              onClick={() => {
                handleSaveClick();
              }}
            >
              저장하기
            </Button>
          </>
        ) : (
          <>
            <Link className={css.back} to='/list'>
              <img src={ARROW_BACK_ICON} alt='뒤로가기' />
              뒤로가기
            </Link>
            <OutlinedButton
              size='large'
              onClick={() => {
                setIsEditing(true);
              }}
            >
              편집하기
            </OutlinedButton>
          </>
        )}
      </div>
      <div className={css.cardBox}>
        {!isEditing && (
          <div className={css.card}>
            <RoundedPlusButton onClick={e => handleSendMessageClick(e)} />
          </div>
        )}
        {messagesList?.map(data => (
          <Card
            key={data.id}
            {...data}
            isEditing={isEditing}
            onClick={() => toggleModal(data)}
            onAddId={setSelectedMessageIdList}
            selectedMessageIdList={selectedMessageIdList}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          onClose={toggleModal}
          profileImage={profileImageURL}
          relationship={relationship}
          creatorName={sender}
          createdAt={createdDate(createdAt)}
          message={content}
          font={font}
        />
      )}
    </div>
  );
};

export default CardList;
