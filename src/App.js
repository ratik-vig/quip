import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Chat from './Pages/Chat';

import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/chat' element={ <Chat /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
