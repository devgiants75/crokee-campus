import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './views/main/Main';
import SignIn from './views/Login/SignIn';
import SignUp from './views/Login/SignUp';
import Mypage from './views/mypage/Mypage';

function App() {
  return (
    <>
      <div className='main_container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/mypage' element={<Mypage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
