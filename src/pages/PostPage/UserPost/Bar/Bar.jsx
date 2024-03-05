import { useState } from 'react';
import Toast from '../../../../components/Toast/Toast';
import { SHARE_OPTION_LIST } from '../../../../constant/constant';
import css from './Bar.module.scss';
import Emoji from './Emoji';
import Share from './Share';
import WritingCount from './WritingCount';

//recipientId 이모지 조회를 위해 받아와야 함
const Bar = ({ recipientId, name }) => {
  //TODO 테스트 후 제거 필요
  console.log('::recipientId::', recipientId);
  name = '테스트';
  const [showToast, setShowToast] = useState(false);

  const handleShareSucess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <div className={css.barArea}>
      <p className={css.name}> To. {name}</p>
      <div className={css.barContents}>
        <WritingCount />
        <Emoji />
        <section className={css.shareLayout}>
          <Share shareList={SHARE_OPTION_LIST} onClick={handleShareSucess} />
          {showToast && (
            <div className={css.toastBox}>
              <Toast onClick={handleToastClose}>URL이 복사되었습니다.</Toast>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Bar;
