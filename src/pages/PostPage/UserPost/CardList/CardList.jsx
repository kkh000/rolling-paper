import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import createAxiosInstance from '../../../../utils/axios';
import { createdDate } from '../../../../utils/createdDate';
import Card from './Card';
import css from './CardList.module.scss';

const testId = '4025';
const initURL = `/recipients/${testId}/messages/?limit=8`;
const CardList = () => {
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessageData, setSelectedMessageData] = useState({});
  const [nextPageURL, setNextPageURL] = useState(initURL);
  const { content, createdAt, font, profileImageURL, relationship, sender } = selectedMessageData;

  const fetchMessagesData = async url => {
    const {
      data: { next, results },
    } = await axios.get(url);
    setMessagesList(prevList => [...prevList, ...results]);
    setNextPageURL(next);
  };

  const handleScroll = () => {
    if (!nextPageURL) return;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMessagesData(nextPageURL);
    }
  };
  useEffect(() => {
    fetchMessagesData(nextPageURL);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextPageURL]);

  const toggleModal = cardData => {
    setShowModal(!showModal);
    if (!showModal) {
      setSelectedMessageData(cardData);
    }
  };
  const handleSendMessageClick = e => {
    e.stopPropagation();
    navigate(`/post/${testId}/message`);
  };
  return (
    <div className={css.cardArea}>
      <div className={css.cardBox}>
        <div className={css.card}>
          <RoundedPlusButton onClick={e => handleSendMessageClick(e)} />
        </div>
        {messagesList?.map(data => (
          <Card key={data.id} {...data} onClick={() => toggleModal(data)} />
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
