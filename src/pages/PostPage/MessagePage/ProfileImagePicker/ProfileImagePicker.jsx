import React, { useState } from 'react';
import Profile from '../../../../components/Profile/Profile';
import { PROFILE_IMAGE_URL_LIST } from '../../../../constant/constant';
import css from './ProfileImagePicker.module.scss';

const ProfileImagePicker = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(PROFILE_IMAGE_URL_LIST[0]);

  const profileList = PROFILE_IMAGE_URL_LIST;

  const handleProfileClick = imageUrl => {
    setSelectedImage(imageUrl);
    onChange(imageUrl);
  };

  return (
    <section className={css.box}>
      <h1 className={css.title}>프로필 이미지</h1>
      <div className={css.profileImage}>
        <Profile size='large' imgUrl={selectedImage} />
        <div className={css.profileBox}>
          <h2 className={css.selectProfile}>프로필 이미지를 선택해주세요!</h2>
          <div className={css.imageList}>
            {profileList.map(imageUrl => (
              <button
                className={css.profileButton}
                type='button'
                key={imageUrl}
                onClick={() => handleProfileClick(imageUrl)}
              >
                <Profile size={'mediumSmall'} imgUrl={imageUrl} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImagePicker;
