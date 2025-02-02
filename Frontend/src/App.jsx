import { useState } from 'react'
import Header from './components/Main/Header';
import './styles/general.css'
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Home/Footer';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <Header/>
      <div className='outlet-page-container'>
        <Outlet/>
      </div>
      {location.pathname.split('/')[1]!=='create' && location.pathname.split('/')[1]!=="course"?<Footer/>:''}
    </>
  )
}

export default App
