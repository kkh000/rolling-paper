import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OutlinedButton from '../../../../components/Button/OutlinedButton';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import createAxiosInstance from '../../../../utils/axios';
import { createdDate } from '../../../../utils/createdDate';
import Card from './Card';
import css from './CardList.module.scss';

const CardList = () => {
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessageData, setSelectedMessageData] = useState({});
  const [backgroundList, setBackgroundList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [backgroundColor, backgroundImageURL] = backgroundList;
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMessageIdList, setSelectedMessageIdList] = useState([]);
  const { content, createdAt, font, profileImageURL, relationship, sender } = selectedMessageData;
  const pageSize = 8;
  const messagesDataURL = `recipients/${id}/messages/?limit=${currentPage * pageSize}`;
  const backgroundDataURL = `recipients/${id}/`;
  const backgroundColorList = {
    beige: '#ffe2ad',
    purple: '#ecd9ff',
    blue: '#b1e4ff',
    green: '#d0f5c3',
  };
  const backgroundStyle = {
    background: backgroundColorList[backgroundColor],
    backgroundImage: `url(${backgroundImageURL})`,
  };

  const fetchBackgroundData = async url => {
    const {
      data: { backgroundColor, backgroundImageURL },
    } = await axios.get(url);
    setBackgroundList([backgroundColor, backgroundImageURL]);
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
    }
  };

  const handleScroll = () => {
    if (!hasNextPage) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    if (scrollHeight - scrollTop <= clientHeight + 500) {
      fetchMessagesData(messagesDataURL);
    }
  };

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
    fetchBackgroundData(backgroundDataURL);
  }, [isEditing]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  return (
    <div className={css.cardArea} style={backgroundStyle}>
      <div className={css.editButtonArea}>
        {isEditing ? (
          <>
            <OutlinedButton
              size='large'
              onClick={() => {
                handleSaveClick();
              }}
            >
              저장하기
            </OutlinedButton>
            <OutlinedButton
              size='large'
              onClick={() => {
                handleDeletePost(id);
              }}
            >
              페이지 삭제하기
            </OutlinedButton>
          </>
        ) : (
          <OutlinedButton
            size='large'
            onClick={() => {
              setIsEditing(true);
            }}
          >
            편집하기
          </OutlinedButton>
        )}
      </div>
      <div className={css.cardBox}>
        <div className={css.card}>
          <RoundedPlusButton onClick={e => handleSendMessageClick(e)} />
        </div>
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
