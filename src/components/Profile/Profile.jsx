import { NONE_PORFILE_IMAGE } from '../../constant/constant';
import css from './Profile.module.scss';

/**
 * 이미지 url을 받아서 프로필이미지를 생성해줍니다.
 * @param url
 * @returns div
 */
const Profile = ({ url, onClick }) => {
  const imgUrl = url || NONE_PORFILE_IMAGE;

  return (
    <div className={css.profile}>
      <img
        onClick={onClick}
        className={url ? css.profileImage : css.profileNoneImage}
        src={imgUrl}
        alt='profile'
      />
    </div>
  );
};

export default Profile;
