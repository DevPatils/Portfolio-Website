import logo from './logo.svg';
import './App.css';
import Home_Page from './Components/Pages/Home_Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Projects_Page from './Components/Pages/Projects_Page';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home_Page/>}></Route>
        <Route path="/projects" element={<Projects_Page/>}></Route>
        <Route path="/blogs" element={<Home_Page/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
