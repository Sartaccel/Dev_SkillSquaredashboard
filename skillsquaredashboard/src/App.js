
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './Pages/HomeDashboard/Dashboard';
function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    
  </BrowserRouter>
    
    
    </>
  );
}

export default App;
