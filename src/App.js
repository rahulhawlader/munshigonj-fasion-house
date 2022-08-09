import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AllBoysDress from './pages/BoysSection/AllBoysDress';
import Contack from './pages/Contack/Contack';
import AllGirlsDress from './pages/GirlsSection/AllGirlsDress';

import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';

import Navber from './pages/Shared/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home />} ></Route>

        <Route path='/home' element={<Home />} ></Route>

        <Route path='/AllBoysDress' element={<AllBoysDress />} ></Route>

        <Route path='/AllGirlsDress' element={<AllGirlsDress />} ></Route>

        <Route path='/Contack' element={<Contack />} ></Route>

        <Route path='/About' element={<About />} ></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
