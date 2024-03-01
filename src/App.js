import { useEffect, useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Chat from './Pages/Chat';

import ProtectedRoute from './Components/ProtectedRoute';
import { UserContext } from './context/userProvider';

import "./App.css";


function App() {
  const { user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("user")){
      setUser(JSON.parse(localStorage.getItem("user")))
      navigate('/chat')
    }
  }, [])

  return (
    <>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/chat' element={ 
            <ProtectedRoute>
              <Chat /> 
            </ProtectedRoute>
          } />
        </Routes>
    </>
  );
}

export default App;
