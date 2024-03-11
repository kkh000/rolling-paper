import dayjs from 'dayjs';

export const createdDate = date => {
  return dayjs(date).format('YYYY-MM-DD');
};
