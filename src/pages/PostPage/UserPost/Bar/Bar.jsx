import css from './Bar.module.scss';
import Emoji from './Emoji';
import Share from './Share';
import WritingCount from './WritingCount';

//recipientId 이모지 조회를 위해 받아와야 함
const Bar = ({ recipientId, name }) => {
  //TODO 테스트 후 제거 필요
  console.log('::recipientId::', recipientId);
  name = '테스트';

  return (
    <div className={css.barArea}>
      <p className={css.name}> To. {name}</p>
      <div className={css.barContents}>
        <WritingCount />
        <Emoji />
        <Share />
      </div>
    </div>
  );
};

export default Bar;
