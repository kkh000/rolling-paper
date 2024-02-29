import css from './Profile.module.scss';
//////////테스트용 임시/////////////////
/**
 * 이미지 url을 받아서 프로필이미지를 생성해줍니다.
 * @param url
 * @returns div
 */
const Profile = ({ url }) => {
  const className = url ? css.profileImage : css.profileNoneImage;
  const imgUrl = url || '/assets/none-profile.svg';

  return (
    <div className={css.profile}>
      <img className={className} src={imgUrl} />
    </div>
  );
};

export default Profile;
