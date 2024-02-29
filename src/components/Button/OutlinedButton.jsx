import {
  EMOJI_ICON_PATH,
  EMOJI_WHITE_ICON_PATH,
  DELETE_ICON_PATH,
  DELETE_WHITE_ICON_PATH,
} from '../../constant/constant';
import css from './OutlinedButton.module.scss';

const OutlinedButton = ({ isDisabled, hasIcon, type, outlinedSize, text }) => {
  const buttonClassName = type === 'text' ? css[outlinedSize] : css.deleted;

  return (
    <div>
      {type === 'text' ? (
        <button className={buttonClassName} disabled={isDisabled}>
          {hasIcon && (
            <img
              className={css.emojiIcon}
              src={isDisabled ? EMOJI_WHITE_ICON_PATH : EMOJI_ICON_PATH}
            />
          )}
          <p className={css.buttonTitle}>{text}</p>
        </button>
      ) : (
        <button className={buttonClassName}>
          <img src={isDisabled ? DELETE_WHITE_ICON_PATH : DELETE_ICON_PATH} />
        </button>
      )}
    </div>
  );
};

export default OutlinedButton;
