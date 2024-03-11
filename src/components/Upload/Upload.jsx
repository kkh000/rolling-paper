import { useRef, useState } from 'react';
import { uploadImage } from '../../utils/cloudinary';
import Button from '../Button/Button';

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

  return (
    <div>
      <Button type='button' onClick={handleUploadButtonClick}>
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        나만의 이미지 추가하기
      </Button>
      {isUploading && <div>Uploading....</div>}
    </div>
  );
};

export default Upload;
