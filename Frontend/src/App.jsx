import { useState } from 'react'
import Header from './components/Main/Header';
import './styles/general.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='outlet-page-container'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
