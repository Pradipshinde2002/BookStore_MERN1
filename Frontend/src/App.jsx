import React from 'react'
import Home from './Home/Home'
import{Routes,Route} from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'


function App() {
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/courses' element={<Courses></Courses>} />

    <Route path='/signup' element={<Signup></Signup>} />



   </Routes>
  </div>
   
   
   </>
  )
}

export default App