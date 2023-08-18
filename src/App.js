import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Tag from './component/Tag';
import Login from './component/Login';
import Main from './component/Main';
import Membership from './component/Membership';
import Day from './component/Day';
import Detail from './component/Detail';
import Favorite from './component/Favorite';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/day' element={<Day />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
        <Route path='/tag' element={<Tag />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/membership' element={<Membership />}></Route>
      </Routes>
    </div>
  );
}

export default App;
