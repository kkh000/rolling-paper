import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button/OutlinedButton';
import { ROLLING_ICON } from '../../constant/constant';
import css from './Header.module.scss';

const Header = () => {
  const pathName = useLocation().pathname;
  const showCreateButton = pathName === '/' || pathName === '/list' ? true : false;

  return (
    <header className={css.layout}>
      <div className={css.contents}>
        <Link to='/'>
          <img className={css.logo} src={ROLLING_ICON} alt='rolling' />
        </Link>
        {showCreateButton && (
          <Link to='/post'>
            <Button size='medium'>롤링 페이퍼 만들기</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
