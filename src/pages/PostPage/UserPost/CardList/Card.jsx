import { useState } from 'react';
import Badge from '../../../../components/Badge/Badge';
import Profile from '../../../../components/Profile/Profile';
import { DELETE_ICON_PATH } from '../../../../constant/constant';
import { ARROW_ROTATE_ICON } from '../../../../constant/constant';
import { cn } from '../../../../utils/classNames';
import { createdDate } from '../../../../utils/createdDate';
import css from './Card.module.scss';

const Card = ({
  id,
  content,
  createdAt,
  font,
  profileImageURL,
  relationship,
  sender,
  onClick,
  onAddId,
  selectedMessageIdList,
  isEditing,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectedCardClassName = cn(css.layout, isSelected && css.selected);

  const fontStyle = {
    fontFamily: font,
  };

  const handleDeletedIdList = id => {
    if (selectedMessageIdList.includes(id)) {
      const newIdList = selectedMessageIdList.filter(prevId => prevId !== id);
      onAddId(newIdList);
    } else {
      onAddId([...selectedMessageIdList, id]);
    }
  };

  return (
    <div className={selectedCardClassName} onClick={onClick}>
      <section className={css.header}>
        <Profile imgUrl={profileImageURL} />
        <div className={css.profile}>
          <p className={css.name}>
            <span className={css.from}>From.</span> {sender}
          </p>
          <Badge relationship={relationship} />
        </div>
        {isEditing && (
          <div
            className={css.deleteButton}
            onClick={e => {
              e.stopPropagation();
              handleDeletedIdList(id);
              setIsSelected(!isSelected);
            }}
          >
            {isSelected ? (
              <img src={ARROW_ROTATE_ICON} alt='되돌리기' />
            ) : (
              <img src={DELETE_ICON_PATH} alt='삭제' />
            )}
          </div>
        )}
      </section>
      <div className={css.divider} />
      <div className={css.content}>
        <p style={fontStyle}>{content}</p>
      </div>
      <div className={css.createdAt}>{createdDate(createdAt)}</div>
    </div>
  );
};

export default Card;
