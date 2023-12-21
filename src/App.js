import Home from './components/Home';
import './App.css';
import DataProvider from './context/DataProvider';
import 'react-router-dom';
import Main from './components/Main';
import Signup from  './components/signup';
import Login from './components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const user = localStorage.getItem("token");
  return (
  <>
   {/* <DataProvider>
      <Home/>
    </DataProvider> */}
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>

    </> 
  );
}

export default App;
