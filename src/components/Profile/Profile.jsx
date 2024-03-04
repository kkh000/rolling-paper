import { NONE_PORFILE_IMAGE } from '../../constant/constant';
import { cn } from '../../utils/classNames';
import css from './Profile.module.scss';

/**
 * 이미지 imgUrl, size 받아서 프로필이미지를 생성해줍니다.
 * imgUrl은 필수, size미입력시 default값 = medium
 * @param {,imgUrl, size}
 * @returns
 */

const Profile = ({ imgUrl, size = 'medium' }) => {
  let imgUrlPath = imgUrl ?? NONE_PORFILE_IMAGE;

  const imageStatus = imgUrl ? 'profileImage' : 'profileNoneImage';

  return <img className={cn(css[imageStatus], css[size])} src={imgUrlPath} alt='profile' />;
};

export default Profile;
