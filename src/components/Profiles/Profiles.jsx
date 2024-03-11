import { cn } from '../../utils/classNames';
import Profile from '../Profile/Profile';
import css from './Profiles.module.scss';

/**
 * 프로필 리스트와 사이즈를 받아서 그룹 프로필 리스트를 생성해준다
 * @param {any[]} Profiles
 * @param {string} size
 * -
 * - Profiles : []
 * - size : xSmall, small
 */

const Profiles = ({ profileList = [], size = 'small', messageCount = 0 }) => {
  return (
    <div className={css.profilesArea}>
      {profileList.slice(0, 3).map(profile => (
        <Profile key={profile.id} imgUrl={profile.profileImageURL} size={size} />
      ))}
      {messageCount > 3 && (
        <div className={cn(css.writerCount, css[size])}>+{messageCount - 3}</div>
      )}
    </div>
  );
};

export default Profiles;
