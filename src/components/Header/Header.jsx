import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button/OutlinedButton';
import css from './Header.module.scss';

const Header = () => {
  const rollingIcon = '/assets/rolling-icon.svg';
  const locationPath = useLocation().pathname;

  const showCreateButton = locationPath === '/' || locationPath === '/list' ? true : false;

  return (
    <div className={css.headerArea}>
      <div className={css.headerContents}>
        <Link to='/' className={css.noneUnder}>
          <div className={css.logoArea}>
            <img className={css.logo} src={rollingIcon} alt='rolling' />
            <p className={css.logoText}>Rolling</p>
          </div>
        </Link>
        {showCreateButton && (
          <Link to='/post'>
            <Button size='medium'>롤링 페이퍼 만들기</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
