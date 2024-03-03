import { cn } from '../../utils/classNames';
import Profile from '../Profile/Profile';
import css from './Profiles.module.scss';

/**
 * 프로필 리스트와 사이즈를 받아서 그룹 프로필 리스트를 생성해준다
 * @param { ,Profiles, size }
 * - Profiles : []
 * - size : xSmall, small
 * @returns
 */
const Profiles = ({ profileList, size = 'small' }) => {
  const otherTotals = profileList.length - 3;

  return (
    <div className={css.profilsArea}>
      {profileList.map(
        (profile, index) =>
          index < 3 && (
            <Profile
              key={profile.id}
              imgUrl={profile.profileImageURL}
              zIndex={index + 1}
              size={size}
            />
          ),
      )}
      {otherTotals > 0 && <div className={cn(css.writerCount, css[size])}>+{otherTotals}</div>}
    </div>
  );
};

export default Profiles;
