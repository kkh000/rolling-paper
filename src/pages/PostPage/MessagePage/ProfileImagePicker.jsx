import Profile from '../../../components/Profile/Profile';
import ProfileList from '../../../components/Profiles/Profiles';
import css from './ProfileImagePicker.module.scss';

const ProfileImagePicker = () => {
  return (
    <section className={css.box}>
      <h1 className={css.title}>프로필 이미지</h1>
      <div className={css.profileImage}>
        <Profile className={css.defaultImage} />
        <div className={css.profileBox}>
          <h2 className={css.selectProfile}>프로필 이미지를 선택해주세요!</h2>
          <div className={css.imageList}>
            <ProfileList className={css.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImagePicker;
