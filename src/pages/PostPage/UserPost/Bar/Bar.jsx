import { useState } from 'react';
import Toast from '../../../../components/Toast/Toast';
import { SHARE_OPTION_LIST } from '../../../../constant/constant';
import css from './Bar.module.scss';
import Emoji from './Emoji';
import Share from './Share';
import WritingCount from './WritingCount';

const Bar = ({ name = '', messages = [], messageCount = 0 }) => {
  const [showToast, setShowToast] = useState(false);

  const handleShareSuccess = () => {
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
        <div className={css.writingCount}>
          <WritingCount messages={messages} messageCount={messageCount} />
        </div>
        <Emoji />
        <Share shareList={SHARE_OPTION_LIST} onSuccess={handleShareSuccess} />
        {showToast && (
          <div className={css.toastBox}>
            <Toast onClick={handleToastClose}>URL이 복사되었습니다.</Toast>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bar;
