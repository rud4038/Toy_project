import React from 'react';
import './App.css';
import Main from './views/Main/Main';
import Header from './views/Header/Header'; 
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './views/Login/Login';
import Member from './views/Member/Member';
import Findid from './views/FindId/Findid';
import Findpassword from './views/Findpassword/Findpassword';
import Contents from './views/Contents/Contents';
import ViewContents from './views/ViewContents/ViewContents';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element = {<Main />} />
          <Route path='Login' element = {<Login />} />
          <Route path='Member' element = {<Member />} />
          <Route path='Findid' element = {<Findid />} />
          <Route path='Findpassword' element = {<Findpassword />} />
          <Route path='Contents' element = {<Contents />} />
          <Route path='ViewContents' element = {<ViewContents/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
