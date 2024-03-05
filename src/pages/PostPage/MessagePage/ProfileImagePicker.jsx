
import Profile from '../../../components/Profile/Profile';
import { PROFILE_IMAGE_URL_LIST } from '../../../constant/constant';
import css from './ProfileImagePicker.module.scss';


const ProfileImagePicker = () => {
  const urlList = PROFILE_IMAGE_URL_LIST;

  return (
    <section className={css.box}>
      <h1 className={css.title}>프로필 이미지</h1>
      <div className={css.profileImage}>
        <Profile imgUrl={PROFILE_IMAGE_URL_LIST[0]}  />
        <div className={css.profileBox}>
          <h2 className={css.selectProfile}>프로필 이미지를 선택해주세요!</h2>
          {urlList.map((imageUrl, index) => (
            <Profile key={index} imgUrl={imageUrl}  />
          ))}
          <div className={css.imageList}></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImagePicker;
