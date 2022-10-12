import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AllBoysDress from './pages/BoysSection/AllBoysDress';
import Contack from './pages/Contack/Contack';
import AllGirlsDress from './pages/GirlsSection/AllGirlsDress';
import BoysAllDresses from './pages/Home/BoysDress/BoysDress/BoysAllDress/BoysAllDresses';
import KidAllDresses from './pages/Home/BoysDress/KidsDress/KidsAllDress/KidAllDresses';

import DiscountAllDresses from './pages/Home/DisCountSection/DiscountAllDress/DiscountAllDresses';
import AllGirlsDresses from './pages/Home/GirlsDress/GirlsDress/AllGirlsDress/AllGirlsDresses';
import AllKidsGirlsDresses from './pages/Home/GirlsDress/KidsGirlsDress/AllKidsGirlsDress/AllKidsGirlsDresses';

import Home from './pages/Home/Home/Home';
import MarrageAllDresses from './pages/Home/MarrgeSection/MarrageAllDress/MarrageAllDresses';
import Login from './pages/Login/Login/Login';
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
        <Route path='/kidAllDressses' element={<KidAllDresses />} ></Route>
        <Route path='/boysAllDresses' element={<BoysAllDresses />} ></Route>
        <Route path='/allKidsGirlsDresses' element={<AllKidsGirlsDresses />} ></Route>
        <Route path='/allGirlsDresses' element={<AllGirlsDresses />} ></Route>
        <Route path='/discountAllDresses' element={<DiscountAllDresses />} ></Route>
        <Route path='/marrageAllDresses' element={<MarrageAllDresses />} ></Route>

        <Route path='/Contack' element={<Contack />} ></Route>

        <Route path='/About' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
