import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.scss';

const Header = () => {
  const rollingIcon = '/assets/rolling-icon.svg';
  const locationPath = useLocation().pathname;

  const showCreateButton = locationPath === '/' || locationPath === '/List' ? true : false;

  return (
    <div className={css.headerArea}>
      <div className={css.headerContents}>
        <Link to='/' className={css.noneUnder}>
          <div className={css.logoArea}>
            <img className={css.logo} src={rollingIcon} />
            <p className={css.logoText}>Rolling</p>
          </div>
        </Link>
        {/* TODO 버튼 컴포넌트를 받아서 변경 필요 */}
        {showCreateButton && <button>버튼</button>}
      </div>
    </div>
  );
};

export default Header;
