import { shareKakao } from '../utils/kakao';
import { copyToClipboard } from '../utils/share';

export const ROLLING_ICON = '/assets/rolling-icon.svg';
export const SEARCH_NULL_IMAGE = '/assets/푸바오.jpeg';

export const CHECK_ICON = '/assets/completed.svg';
export const CLOSE_ICON = '/assets/close.svg';

export const ARROW_UP_ICON = '/assets/arrow_up.svg';
export const ARROW_DOWN_ICON = '/assets/arrow_down.svg';
export const ARROW_LEFT_ICON = '/assets/arrow_left.svg';
export const ARROW_RIGHT_ICON = '/assets/arrow_right.svg';
export const ARROW_ROTATE_ICON = '/assets/rotate.svg';
export const ARROW_BACK_ICON = '/assets/backForward-arrow.svg';

export const EMOJI_ICON_PATH = '/assets/add-lg.svg';
export const EMOJI_WHITE_ICON_PATH = '/assets/add-lg-white.svg';

export const DELETE_ICON_PATH = '/assets/deleted.svg';
export const DELETE_WHITE_ICON_PATH = '/assets/deleted-white.svg';

export const NONE_PORFILE_IMAGE = '/assets/none-profile.svg';

export const PLUS_ICON = '/assets/plus.svg';
export const SHARE_ICON = '/assets/share.svg';

export const ADD_ROLLINGPAPER = '/assets/main-image01.png';
export const ADD_EMOJI = '/assets/main-image02.png';

export const HOME_ARTICLE_LIST = [
  {
    id: '01',
    title: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
    description: '로그인 없이 자유롭게 만들어요.',
    image: ADD_ROLLINGPAPER,
  },
  {
    id: '02',
    title: '서로에게 이모지로 감정을 표현해보세요',
    description: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
    image: ADD_EMOJI,
  },
];

export const BACKGROUND_COLOR_LIST = ['beige', 'purple', 'blue', 'green'];
export const BACKGROUND_COLOR_VALUE_LIST = {
  beige: '#ffe2ad',
  purple: '#ecd9ff',
  blue: '#b1e4ff',
  green: '#d0f5c3',
};

export const AXIOS_BASE_URL = 'https://rolling-api.vercel.app/4-9/';
export const AXIOS_CONTENT_TYPE = 'application/json';

export const FONT_LIST = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
export const RELATIONSHIP_LIST = ['지인', '친구', '동료', '가족'];

export const SHARE_OPTION_LIST = [
  { name: '카카오톡', handler: shareKakao },
  { name: '링크', handler: copyToClipboard },
];

export const PROFILE_IMAGE_URL_LIST = [
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  'https://picsum.photos/id/522/100/100',
  'https://picsum.photos/id/547/100/100',
  'https://picsum.photos/id/268/100/100',
  'https://picsum.photos/id/1082/100/100',
  'https://picsum.photos/id/571/100/100',
  'https://picsum.photos/id/494/100/100',
  'https://picsum.photos/id/859/100/100',
  'https://picsum.photos/id/437/100/100',
  'https://picsum.photos/id/1064/100/100',
];
