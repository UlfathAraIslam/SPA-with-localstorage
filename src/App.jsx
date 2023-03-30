import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime){
        const sum = previousWatchTime + time;
        localStorage.setItem("watchTime",sum);
      setWatchTime(sum);
    }
    else{
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  }

  return (
    <div className="App">
      <div className='main row'>
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      {/* <ToastContainer></ToastContainer> */}
      <ToastContainer />
    </div>
  )
}

export default App
