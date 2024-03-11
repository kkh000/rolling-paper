import React, { useState, useEffect } from 'react';
import Profile from '../../../../components/Profile/Profile';
import Upload from '../../../../components/Upload/Upload';
import { PROFILE_IMAGE_URL_LIST } from '../../../../constant/constant';
import css from './ProfileImagePicker.module.scss';

const ProfileImagePicker = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(PROFILE_IMAGE_URL_LIST[0]);
  const [profileImages, setProfileImages] = useState(PROFILE_IMAGE_URL_LIST);
  const [uploadImageURL, setUploadImageURL] = useState(null);

  const handleProfileClick = imageUrl => {
    setSelectedImage(imageUrl);
    onChange(imageUrl);
  };

  useEffect(() => {
    if (uploadImageURL) {
      setProfileImages([uploadImageURL, ...profileImages.slice(0, profileImages.length - 1)]);
    }
  }, [uploadImageURL]);

  console.log(uploadImageURL);
  const handleUploadImage = imageUrl => {
    setUploadImageURL(imageUrl);
  };

  return (
    <section className={css.box}>
      <div className={css.addImage}>
        <h1 className={css.title}>프로필 이미지</h1>
        <Upload setUploadImageURL={handleUploadImage} />
      </div>
      <div className={css.profileImage}>
        <Profile size='large' imgUrl={selectedImage} />
        <div className={css.profileBox}>
          <h2 className={css.selectProfile}>프로필 이미지를 선택해주세요!</h2>
          <div className={css.imageList}>
            {profileImages.map(imageUrl => (
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
