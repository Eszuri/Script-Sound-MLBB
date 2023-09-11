import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HeroList from './pages/HeroList';
import Laporkan from './pages/Laporkan';
import Request from './pages/Request';
import FailedUrl from './components/FailedUrl';
import Brody from './hero/Brody';
import Change from './hero/Change';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(37, 37, 37)";
    document.body.style.color = "white";
  });
  return (
    <>
      <Routes>
        {/* navigasi  */}
        <Route path='/' element={<Home />} />
        <Route path='*' element={<FailedUrl />} />
        <Route path='/list' element={<HeroList />} />
        <Route path='/report' element={<Laporkan />} />
        <Route path='/request' element={<Request />} />
        {/* navigasi End */}

        {/* hero  */}
        <Route path='/ireng' element={<Brody />} />
        <Route path='/change' element={<Change />} />
        {/* hero End */}
      </Routes>
    </>
  )
}

export default App