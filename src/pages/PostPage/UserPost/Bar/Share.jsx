import { useState } from 'react';
import { SHARE_ICON } from '../../../../constant/constant';
import css from './Share.module.scss';

const Share = () => {
  const [shareBoxToggle, setShareBoxToggle] = useState(false);
  const handleShareBoxClick = () => {
    setShareBoxToggle(!shareBoxToggle);
  };
  return (
    <div className={css.share}>
      <div className={css.shareImage} onClick={handleShareBoxClick}>
        <img src={SHARE_ICON} alt='share' />
      </div>
      {shareBoxToggle && (
        <div className={css.shareArea}>
          {/* TODO: 공유 기능 추가 필요 */}
          <div className={css.shareSns}>
            <p className={css.shareSnsText}>카카오톡 공유</p>
          </div>
          <div className={css.shareSns}>
            <p className={css.shareSnsText}>URL 공유</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
