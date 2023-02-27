import { Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './component/authentication/LoginPage';
import SignUpPage from './component/authentication/SignUpPage';
import Home from './component/Dashboard/Home';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<LoginPage/>}/>
     {/* SignUpPage Route */}
     <Route path='/register' element={<SignUpPage/>}/>
     <Route path='/home' element={<Home/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
