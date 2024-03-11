import axios from 'axios';

export const uploadImage = async file => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  try {
    const response = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data);
    console.log(response);
    return response.data.url;
  } catch (error) {
    return error;
  }
};
