import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import { NONE_PORFILE_IMAGE } from '../../../../constant/constant';
import createAxiosInstance from '../../../../utils/axios';
import Card from './Card';
import css from './CardList.module.scss';

const testId = '4025';
const CardList = () => {
  const [showModal, setShowModal] = useState(false);
  const [messageData, setMessageData] = useState({});
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/recipients/${testId}/messages/?limit=1000`);
      setMessageData(data);
    };

    fetchData();
  }, []);

  console.log(messageData);
  const toggleModal = () => setShowModal(!showModal);
  const handleSendMessageClick = e => {
    e.stopPropagation();
    navigate(`/post/${testId}/message`);
  };
  return (
    <div className={css.cardArea}>
      <div className={css.cardBox} onClick={toggleModal}>
        <div className={css.card}>
          <RoundedPlusButton onClick={e => handleSendMessageClick(e)} />
        </div>
        {/* data 받아서 map 돌릴예정 */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {showModal && (
        <Modal
          onClose={toggleModal}
          profileImage={NONE_PORFILE_IMAGE}
          relationship='지인'
          creatorName='테스트'
          createdAt='2024.03.02'
          message='테스트'
        />
      )}
    </div>
  );
};

export default CardList;
