//import logo from './logo.svg';
//import './App.css';
import promoImg from "./assets/mamhamajai.png";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from './component/Header';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </>
  /** 
   มาจากบรรทัด2 <div className="App">  
      <header className="App-header">
        <img src={promoImg} className="App-logo" alt="logo" />
        <p>
          <code>MamhaMajai</code> 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/results?search_query=%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99"
          target="_blank"
          rel="noopener noreferrer"
        >
          Summer-CORNBOI
        </a>
      </header>
    </div>*/
  );
}

export default App;
