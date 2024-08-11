import { useState } from 'react'
import Home from './Components/Home'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Message from './Components/Message'

function App() {


  return (
  
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/message' element={<Message/>}/>
   </Routes>
  </BrowserRouter>
  )
}

export default App
