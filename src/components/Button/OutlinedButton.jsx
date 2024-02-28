import { EMOJI_ICON_PATH, DELETE_ICON_PATH } from '../../constant/constant';
import css from './OutlinedButton.module.scss';

const OutlinedButton = () => {
  // prop : hasIcon={true/false}, type={'text'/'delete'}, outlineSize={outline56/40/36/28}
  const hasIcon = true;
  const type = 'text';

  // add-lg-white, deleted-white : disabled, 나머지 add-lg, deleted

  return (
    <div>
      {type === 'text' ? (
        <button className={css.outlined40}>
          {hasIcon && <img className={css.emojiIcon} src={EMOJI_ICON_PATH} />}
          <p className={css.buttonTitle}>Enabled</p>
        </button>
      ) : (
        <button className={css.deleted}>
          <img src={DELETE_ICON_PATH} />
        </button>
      )}
    </div>
  );
};

export default OutlinedButton;
