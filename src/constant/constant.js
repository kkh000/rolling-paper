import { shareKakao } from '../utils/kakao';
import { copyToClipboard } from '../utils/share';

export const CHECK_ICON = '/assets/completed.svg';
export const CLOSE_ICON = '/assets/close.svg';

export const ARROW_UP_ICON = '/assets/arrow_up.svg';
export const ARROW_DOWN_ICON = '/assets/arrow_down.svg';

export const EMOJI_ICON_PATH = '/assets/add-lg.svg';
export const EMOJI_WHITE_ICON_PATH = '/assets/add-lg-white.svg';

export const DELETE_ICON_PATH = '/assets/deleted.svg';
export const DELETE_WHITE_ICON_PATH = '/assets/deleted-white.svg';

export const NONE_PORFILE_IMAGE = '/assets/none-profile.svg';

export const PLUS_ICON = '/assets/plus.svg';
export const SHARE_ICON = '/assets/share.svg';

export const CARD_COLOR_LIST = ['orange', 'purple', 'blue', 'green'];
export const BACKGROUND_IMAGE_URL_LIST = [
  'https://i.ibb.co/kgwVr13/xmas2.jpg',
  'https://i.ibb.co/M5fwrdQ/xmas.jpg',
  'https://i.ibb.co/zhfb9x3/forest.jpg',
  'https://i.ibb.co/xD8zBpL/nighthouse.jpg',
];

export const AXIOS_BASE_URL = 'https://rolling-api.vercel.app/4-9/';
export const AXIOS_CONTENT_TYPE = 'application/json';

export const FONT_LIST = ['Noto Sans', 'Pretendara', '나눔명조', '나눔손글씨 손편지체'];
export const RELATIONSHIP_LIST = ['지인', '친구', '동료', '가족'];

export const SHARE_OPTION_LIST = [
  { name: '카카오톡', handler: shareKakao },
  { name: '링크', handler: copyToClipboard },
];
export const WEB_URL = 'https://www.naver.com';
