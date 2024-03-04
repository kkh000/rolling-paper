import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import createAxiosInstance from '../../../../utils/axios';
import { createdDate } from '../../../../utils/createdDate';
import Card from './Card';
import css from './CardList.module.scss';

const testId = '4025';
const CardList = () => {
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [messagesData, setMessagesData] = useState({});
  const [selectedMessageData, setSelectedMessageData] = useState({});
  const { content, createdAt, font, profileImageURL, relationship, sender } = selectedMessageData;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/recipients/${testId}/messages/?limit=1000`);
      setMessagesData(data);
    };

    fetchData();
  }, []);

  console.log(messagesData);
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
        {messagesData?.results?.map(data => (
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
