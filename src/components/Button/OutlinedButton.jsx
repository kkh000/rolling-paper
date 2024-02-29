import {
  EMOJI_ICON_PATH,
  EMOJI_WHITE_ICON_PATH,
  DELETE_ICON_PATH,
  DELETE_WHITE_ICON_PATH,
} from '../../constant/constant';
import css from './OutlinedButton.module.scss';

const OutlinedButton = ({
  isDeleted,
  isDisabled = false,
  hasIcon = false,
  size = 'Xl',
  children = 'Enabled',
  onClick,
}) => {
  const buttonClassName = isDeleted ? css.deleted : css['outlined' + size];

  return (
    <div>
      {isDeleted ? (
        <button className={buttonClassName}>
          <img src={isDisabled ? DELETE_WHITE_ICON_PATH : DELETE_ICON_PATH} />
        </button>
      ) : (
        <button className={buttonClassName} disabled={isDisabled} onClick={onClick}>
          {hasIcon && (
            <img
              className={css.emojiIcon}
              src={isDisabled ? EMOJI_WHITE_ICON_PATH : EMOJI_ICON_PATH}
            />
          )}
          <p className={css.buttonTitle}>{children}</p>
        </button>
      )}
    </div>
  );
};

export default OutlinedButton;
