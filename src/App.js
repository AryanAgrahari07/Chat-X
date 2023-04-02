import './App.css';
import { AuthContext } from './AuthContext';
import Home from './pages/home';
import Login from './pages/login';
import "./style.scss";
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useContext } from "react";

function App() {
  
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='./Register'/>
    }
    return children;
  }


  return (
<Router>
  <div className="app"> 
    <Routes>
        <Route path='/Home' element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/Login" />} />
        <Route path='/Register' element={<><Register/></>} />
        <Route path='/login' element={<><Login/></>} />
        <Route path='/home/register' element={<><Register/></>} />
        <Route path='/home/login' element={<><Login/></>} />
    </Routes>
  </div>
    </Router>
  );
}

export default App;
