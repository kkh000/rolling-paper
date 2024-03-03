import { NONE_PORFILE_IMAGE } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import css from './Profile.module.scss';

/**
 * 이미지 imgUrl, size, zIndex를 받아서 프로필이미지를 생성해줍니다.
 * imgUrl은 필수, 그 외는 선택가능합니다.
 * @param {,imgUrl, size, zIndex}
 * @returns
 */
const Profile = ({ imgUrl, size, zIndex }) => {
  let imgUrlPath = imgUrl ?? NONE_PORFILE_IMAGE;
  zIndex = `zIndex${zIndex}`;

  const imageStatus = imgUrl ? 'profileImage' : 'profileNoneImage';

  return (
    <img className={cn(css[imageStatus], css[size], css[zIndex])} src={imgUrlPath} alt='profile' />
  );
};

Profile.defaultProps = {
  size: 'medium',
};

export default Profile;
