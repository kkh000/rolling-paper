import { useState } from 'react';
import RoundedPlusButton from '../../../../components/Button/RoundedPlusButton';
import Modal from '../../../../components/Modal/Modal';
import { NONE_PORFILE_IMAGE } from '../../../../constant/constant';
import Card from './Card';
import css from './CardList.module.scss';

const CardList = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <div className={css.cardArea}>
      <div className={css.cardBox} onClick={toggleModal}>
        <div className={css.card}>
          {/* onClick에 /post/{id}/message 로 가는 이벤트핸들러 넣어줘야됨 */}
          {/* 얘를 클릭했을때는 모달이 나오면 안되기 때문에 나중에 e.stopPropagation(); 넣기 */}
          <RoundedPlusButton />
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
