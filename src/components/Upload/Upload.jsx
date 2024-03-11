import { useRef, useState } from 'react';
import { uploadImage } from '../../utils/cloudinary';
import css from './Upload.module.scss';

const Upload = ({ setUploadImageURL }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef(null);

  const handleImageChange = async event => {
    setIsUploading(true);
    const data = await uploadImage(event.target.files[0]);
    setUploadImageURL(data);
    setIsUploading(false);
  };
  console.log(isUploading);

  return (
    <div className={css.layout}>
      <button type='button' className={css.uploadImageButton} onClick={handleUploadButtonClick}>
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        이미지 추가하기
      </button>
      {isUploading && (
        <div className={css.loading}>
          <div className={css['lds-spinner']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className={css.uploadingText}>uploading...</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
