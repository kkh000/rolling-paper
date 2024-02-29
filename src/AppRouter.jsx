import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/HomePage/Home';
import List from './pages/ListPage/List';
import Edit from './pages/PostPage/EditPage/Edit';
import Message from './pages/PostPage/MessagePage/Message';
import NewPost from './pages/PostPage/NewPost/NewPost';
import Post from './pages/PostPage/Post';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/:id/edit' element={<Edit />} />
          <Route path='/post/:id/message' element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
