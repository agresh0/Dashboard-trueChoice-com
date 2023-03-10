import { collection, getDocs } from 'firebase/firestore';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import LoginPage from './component/authentication/LoginPage';
import SignUpPage from './component/authentication/SignUpPage';
import Vehicle from './component/Dashboard/demoData';
import ExpenseTrack from './component/Dashboard/ExpenseTrack';
import Home from './component/Dashboard/Home';
import Purchased from './component/Dashboard/Purchased';
import SideBar from './component/Dashboard/SideBar';
import StockList from './component/Dashboard/StockList';
import VehicleDetails from './component/Dashboard/VehicleDetails'
import { db } from './firebase/Config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase/Config';
function App() {

  const [authUser,setAuthUser] = useState(null);

  useEffect(() =>  {
     onAuthStateChanged(auth, (user) => {
      if(user) {
        setAuthUser(user)
        
      } else {
        setAuthUser(false);
      }
    })

  }, [])
  console.log(authUser);
  return (
    <div className="App">


      {/* <SideBar> */}
      {
        authUser &&
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {/* SignUpPage Route */}
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchaselist' element={<Purchased />} />
        <Route path='/stockList' element={<StockList />} />
        <Route path='/vehicledetails/:id' element={<VehicleDetails />} />
        <Route path='/expense' element={<ExpenseTrack />} />
      </Routes>
      }
      {
        authUser===false &&
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      }

    </div>
  );
}

export default App;
