import { WEB_URL } from '../constant/constant';

const { Kakao } = window;
Kakao.cleanup();
Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
export const shareKakao = () => {
  const realUrl = WEB_URL;
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '추억의 롤링페이퍼',
      description: '친구에게 메세지를 남겨보세요!',
      imageUrl:
        'https://images.unsplash.com/photo-1593526492327-b071f3d5333e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: {
        mobileWebUrl: realUrl,
        webUrl: realUrl,
      },
    },
    buttons: [
      {
        title: '친구에게 메세지 남기기!',
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
    ],
  });
};
