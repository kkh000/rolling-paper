import Profiles from '../../../../components/Profiles/Profiles';
import css from './WritingCount.module.scss';

const WritingCount = ({ messages, messageCount }) => {
  return (
    <div className={css.layout}>
      <Profiles profileList={messages} />
      <div className={css.writingCount}>
        <p className={css.count}>{messageCount}</p>명이 작성했어요!
      </div>
    </div>
  );
};

export default WritingCount;
