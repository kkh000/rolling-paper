import { Outlet } from 'react-router-dom';
import css from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
