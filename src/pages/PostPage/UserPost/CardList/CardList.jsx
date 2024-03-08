import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import createAxiosInstance from '../../../../utils/axios';
import { createdDate } from '../../../../utils/createdDate';
import Card from './Card';
import css from './CardList.module.scss';

const CardList = () => {
  const axios = createAxiosInstance();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessageData, setSelectedMessageData] = useState({});
  const [backgroundList, setBackgroundList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { content, createdAt, font, profileImageURL, relationship, sender } = selectedMessageData;
  const pageSize = 8;
  const { id } = useParams();
  const messagesDataURL = `recipients/${id}/messages/?limit=${currentPage * pageSize}`;
  const backgroundDataURL = `recipients/${id}/`;
  const [backgroundColor, backgroundImageURL] = backgroundList;

  const backgroundColorList = {
    beige: '#ffe2ad',
    purple: '#ecd9ff',
    blue: '#b1e4ff',
    green: '#d0f5c3',
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
    background: backgroundColorList[backgroundColor],
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

  useEffect(() => {
    fetchMessagesData(messagesDataURL);
    fetchBackgroundData(backgroundDataURL);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  return (
    <div className={css.cardArea} style={backgroundStyle}>
      <div className={css.cardBox}>
        <div className={css.card}>
          <RoundedPlusButton onClick={e => handleSendMessageClick(e)} />
        </div>
        {messagesList?.map((data, idx) => (
          <Card key={idx} {...data} onClick={() => toggleModal(data)} />
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
